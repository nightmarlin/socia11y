import * as functions from "firebase-functions";
import { imageProcessor } from "./image-processing";
import textExtractor from "./text-extraction";
import { textProcessor } from "./text-processing";
import { RequestBody, ResponseBody, Metrics } from "./types";

export async function controller(request: RequestBody): Promise<ResponseBody> {
  functions.logger.debug("controller reached", request);
  if (typeof request.image === undefined || request.image === null) {
    throw new Error("no image uploaded. processing nothing is impossible");
  }

  const imageStats: Metrics = await imageProcessor(request, request.image);

  const imageText = request.overrideText
    ? request.overrideText
    : await textExtractor(request.image);

  const textStats = await textProcessor(request, imageText);

  return {
    metrics: { ...imageStats, ...textStats },
    extractedImageText: imageText,
  };
}
