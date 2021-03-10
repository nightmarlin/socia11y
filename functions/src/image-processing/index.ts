import * as functions from "firebase-functions";
import {
  Metrics,
  RequestBody,
  getActiveOptions,
  isImageMetric,
  ImageMetricTypes,
} from "../types";

type Evaluator = (img: Buffer) => Promise<Metrics> | Metrics;
const evaluators: Partial<Record<ImageMetricTypes, Evaluator>> = {
  // TODO: Add image evaluators here
};

export async function imageProcessor(
  req: RequestBody,
  img?: Buffer
): Promise<Metrics> {
  functions.logger.debug("processing image");
  let res: Metrics = {};
  if (!img) {
    return res;
  }

  for (const opt of getActiveOptions(req.options)) {
    functions.logger.debug(
      "checking if option is a known image metric name",
      opt
    );

    if (isImageMetric(opt)) {
      const evaluator = evaluators[opt];

      if (evaluator) {
        functions.logger.debug("evaluating", opt);
        res = { ...res, ...(await evaluator(img)) };
      }
    }
  }

  return res;
}
