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

export type BaseMetric = {
  name: string;
  score: number;
  explanation: string;
};

export type TextMetric = {
  [T in TextMetricTypes]?: BaseMetric;
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
