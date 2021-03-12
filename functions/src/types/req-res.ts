import { Metrics, ImageMetricTypes, TextMetricTypes } from "./metrics";

export type RequestOptions = {
  [T in ImageMetricTypes | TextMetricTypes]?: boolean;
};

/**
 * Retrieves a list of the active options to check
 * @param opts the request options to check
 * @returns an array of active options ( all optionNames where { optionName: true } )
 */
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
   * The image to evaluate, in base64 format
   */
  image?: string;
};

/**
 * Defines the shape of data sent server->client
 */
export type ResponseBody = {
  metrics: Metrics;

  extractedImageText?: string;
};
