/**
 * Defines the know text metric type names
 */
export const textMetricNames = [
  "overallReadability",
  "quantity",
  "complexity",
  "sentenceLength",
] as const;

/**
 * Defines the know image metric type names
 */
export const imageMetricNames = [
  "contrast",
  "colourBlindness",
  "hasDescription",
  "textQuantity",
] as const;

/**
 * Defines the concrete type for the result of the array access
 */
export type TextMetricTypes = typeof textMetricNames[number];

/**
 * Defines the concrete type for the result of the array access
 */
export type ImageMetricTypes = typeof imageMetricNames[number];

/**
 * Determines that a string is actually a valid text metric ID
 */
export function isTextMetric(o: unknown): o is TextMetricTypes {
  return typeof o === "string" && textMetricNames.map(String).includes(o);
}

/**
 * Determines that a string is actually a valid image metric ID
 */
export function isImageMetric(o: unknown): o is ImageMetricTypes {
  return typeof o === "string" && imageMetricNames.map(String).includes(o);
}

/**
 * Describes a standard non-specific metric evaluation result
 */
export type BaseMetric = {
  name: string;
  score: string;
  explanation: string;
};

/**
 * Adds additional properties to the Base Metric to allow for text region identification
 */
export type TextMetric = {
  [T in TextMetricTypes]?: BaseMetric & {
    errorLocations: { start: number; end: number }[];
  };
};

/**
 * Adds additional properties to the Base Metric to allow for image region identification
 */
export type ImageMetric = {
  [T in ImageMetricTypes]?: BaseMetric;
};

/**
 * A type-safe object that only allows known values
 */
export type Metrics = TextMetric & ImageMetric;
