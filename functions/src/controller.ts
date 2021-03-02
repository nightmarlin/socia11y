import { textProcessor } from "./text-processing";
import { RequestBody, ResponseBody, Metrics } from "./types";

export function controller(request: RequestBody): ResponseBody {
  const imageStats: Metrics = {}; // TODO: Get Image stats

  const imageText = "fhfashjjsfdajkbnvbasklihvsadnkl;vslnk"; // TODO: Extract text from image
  const textStats = textProcessor(request, imageText);

  return { metrics: { ...imageStats, ...textStats } };
}
