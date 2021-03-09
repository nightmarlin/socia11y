// import * as vision from "@google-cloud/vision";
import * as functions from "firebase-functions";

export default async function (img?: File): Promise<string> {
  functions.logger.debug("processing image");
  if (!img) {
    return "";
  }

  // const visionClient = new vision.ImageAnnotatorClient();

  // const [result] = await visionClient.textDetection(img);
  // result.textAnnotations?.map((annotation) => annotation.properties?.);

  return "";
}
