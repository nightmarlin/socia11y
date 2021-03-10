import * as functions from "firebase-functions";
import { imageProcessor } from "./image-processing";
import textExtractor from "./text-extraction";
import { textProcessor } from "./text-processing";
import { RequestBody, ResponseBody, Metrics } from "./types";

export async function controller(request: RequestBody): Promise<ResponseBody> {
  functions.logger.debug("handling request", request);

  // require an image
  if (typeof request.image === undefined || request.image === null) {
    throw new Error("no image uploaded. processing nothing is impossible");
  }

  // Process image
  const imageStats: Metrics = await imageProcessor(request, request.image);

  // Retrieve text
  const extracted = await textExtractor(request.image);

  // Use override text if present else use extracted text (if present)
  const imageText = request.overrideText
    ? request.overrideText
    : extracted.mainText
    ? extracted.mainText
    : "";

  // Process extracted text
  const textStats = await textProcessor(request, imageText);

  functions.logger.debug("complete");
  return {
    // combine metrics - names don't clash so this is safe
    metrics: { ...imageStats, ...textStats },
    // Log the text we retrieved
    extractedImageText: imageText[0],
  };
}
