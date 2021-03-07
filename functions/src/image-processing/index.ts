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
  let res: Metrics = {};
  if (!img) {
    return res;
  }

  for (const opt of getActiveOptions(req.options)) {
    if (isImageMetric(opt)) {
      const evaluator = evaluators[opt];

      if (evaluator) {
        res = { ...res, ...(await evaluator(img)) };
      }
    }
  }

  return res;
}
