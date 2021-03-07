import {
  Metrics,
  RequestBody,
  getActiveOptions,
  TextMetricTypes,
  isTextMetric,
} from "../types";
import { processSentenceLength } from "./sentence-length";

type Evaluator = (text: string) => Promise<Metrics> | Metrics;
const evaluators: Partial<Record<TextMetricTypes, Evaluator>> = {
  sentenceLength: processSentenceLength,
};

export async function textProcessor(
  req: RequestBody,
  text: string
): Promise<Metrics> {
  let res: Metrics = {};
  if (!text) {
    return res;
  }

  for (const opt of getActiveOptions(req.options)) {
    if (isTextMetric(opt)) {
      const evaluator = evaluators[opt];

      if (evaluator) {
        res = { ...res, ...(await evaluator(text)) };
      }
    }
  }

  return res;
}
