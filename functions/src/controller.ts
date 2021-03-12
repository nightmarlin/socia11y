import * as functions from "firebase-functions";
import { imageProcessor } from "./image-processing";
import textExtractor from "./text-extraction";
import { textProcessor } from "./text-processing";
import { RequestBody, ResponseBody, Metrics } from "./types";

export async function controller(request: RequestBody): Promise<ResponseBody> {
  functions.logger.debug("controller");
  functions.logger.debug({ opts: request.options, hasImage: !!request.image });

  // require an image
  if (typeof request.image === undefined || request.image === null) {
    throw new Error("no image uploaded. processing nothing is impossible");
  }

  // Process image
  const imageStats: Metrics = await imageProcessor(request, request.image);

  // Retrieve text
  const extracted = await textExtractor(request.image);

  // Process extracted text
  const textStats = extracted.text
    ? await textProcessor(request, extracted.text)
    : {};

  const res = {
    // combine metrics - names don't clash so this is safe
    metrics: { ...imageStats, ...textStats },
    // Log the text we retrieved
    extractedImageText: extracted.text ? extracted.text : "",
  };

  functions.logger.debug("complete", res);
  return res;
}
