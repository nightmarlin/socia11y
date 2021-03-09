export const textMetricNames = [
  "overallReadability",
  "quantity",
  "complexity",
  "sentenceLength",
] as const;
export type TextMetricTypes = typeof textMetricNames[number];
export const imageMetricNames = [
  "contrast",
  "colourBlindness",
  "hasDescription",
  "textQuantity",
] as const;
export type ImageMetricTypes = typeof imageMetricNames[number];

export function isTextMetric(o: unknown): o is TextMetricTypes {
  return typeof o === "string" && textMetricNames.map(String).includes(o);
}
export function isImageMetric(o: unknown): o is ImageMetricTypes {
  return typeof o === "string" && imageMetricNames.map(String).includes(o);
}

export type BaseMetric = {
  name: string;
  score: string;
  explanation: string;
};

export type TextMetric = {
  [T in TextMetricTypes]?: BaseMetric & {
    errorLocations: { start: number; end: number }[];
  };
};

export type ImageMetric = {
  [T in ImageMetricTypes]?: BaseMetric & {
    focusRegion: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
};

export type Metrics = TextMetric & ImageMetric;
