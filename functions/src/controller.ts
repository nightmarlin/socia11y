import { textProcessor } from "./text-processing";
import { RequestBody, Metrics } from "./types";

export function controller(request: RequestBody): Metrics {
  const imageText = ""; // TODO: Extract text from image

  const imageStats: Metrics = {}; // TODO: Get Image stats

  const textStats = textProcessor(request, imageText);

  return { ...{ imageStats }, ...textStats };
}
