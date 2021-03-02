import { Metrics, ImageMetricTypes, TextMetricTypes } from "./metrics";

export type RequestBody = {
  options: {
    [T in ImageMetricTypes | TextMetricTypes]?: boolean;
  };

  image?: ImageBitmap; // TODO: Find a better type
  altText?: string;
};

export type ResponseBody = {
  metrics: Metrics;
};
