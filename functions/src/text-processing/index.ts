import { Metrics, RequestBody } from "../types";
import { processSentenceLength } from "./sentence-length";

export function textProcessor(req: RequestBody, imageText?: string): Metrics {
  let res: Metrics = {};
  if (!req.altText) {
    return res;
  }

  if (req.options.sentenceLength) {
    res = { ...res, ...processSentenceLength(req.altText, "plaintext") };
  }

  return res;
}
