import { Metrics, ImageMetricTypes, TextMetricTypes } from "./metrics";

export type RequestOptions = {
  [T in ImageMetricTypes | TextMetricTypes]?: boolean;
};

export function getActiveOptions(opts: RequestOptions): string[] {
  return Object.entries(opts)
    .filter(([, v]) => typeof v !== undefined && v !== null && v) // only defined non-null truthy values
    .map(([k]) => k); // return key names
}

/**
 * Defines the shape of data sent client->server
 */
export type RequestBody = {
  /**
   * The options to filter criteria by
   */
  options: RequestOptions;

  /**
   * The image to evaluate, in Buffer format
   */
  image?: File;

  /**
   * For testing only - allows the program to act as if it's extracted text from an image
   */
  overrideText?: string;
};

/**
 * Defines the shape of data sent server->client
 */
export type ResponseBody = {
  metrics: Metrics;

  extractedImageText?: string;
};
