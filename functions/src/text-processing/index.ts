import { Metrics, RequestBody } from "../types";
import { processSentenceLength } from "./sentence-length";

export function textProcessor(req: RequestBody, text: string): Metrics {
  let res: Metrics = {};
  if (!text) {
    return res;
  }

  if (req.options.sentenceLength) {
    res = { ...res, ...processSentenceLength(text) };
  }

  return res;
}
