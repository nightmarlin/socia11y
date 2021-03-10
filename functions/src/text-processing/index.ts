import * as functions from "firebase-functions";
import {
  Metrics,
  RequestBody,
  getActiveOptions,
  TextMetricTypes,
  isTextMetric,
} from "../types";
import { processSentenceLength } from "./sentence-length";

/**
 * A function that can evaluate a piece of text and return a metric
 */
type Evaluator = (text: string) => Promise<Metrics> | Metrics;

/**
 * The collection of known evaluators
 */
const evaluators: Partial<Record<TextMetricTypes, Evaluator>> = {
  sentenceLength: processSentenceLength,
};

/**
 * Uses all reqested known evaluators on text extracted from the image
 *
 * @param req the original request body
 * @param text the text extracted from the image
 * @returns metrics based on the text
 */
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

        // Merge result and evaluator result. Evaluators can return multiple metrics,
        // so spread them in
        res = { ...res, ...(await evaluator(text)) };
      }
    }
  }

  return res;
}
