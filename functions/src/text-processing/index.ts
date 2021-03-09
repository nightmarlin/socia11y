import * as functions from "firebase-functions";
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
  functions.logger.debug("processing text");
  let res: Metrics = {};
  if (!text) {
    return res;
  }

  for (const opt of getActiveOptions(req.options)) {
    functions.logger.debug(
      "checking if option is a known text metric name",
      opt
    );

    if (isTextMetric(opt)) {
      const evaluator = evaluators[opt];

      if (evaluator) {
        functions.logger.debug("evaluating", opt);
        res = { ...res, ...(await evaluator(text)) };
      }
    }
  }

  return res;
}
