import * as vision from "@google-cloud/vision";
import * as functions from "firebase-functions";

export default async function (
  img?: Buffer
): Promise<{
  mainText?: string;
  annotations?: vision.protos.google.cloud.vision.v1.IEntityAnnotation[];
}> {
  functions.logger.debug("processing image");
  if (!img) {
    return {};
  }

  const [result] = await new vision.ImageAnnotatorClient().textDetection(img);

  if (result.textAnnotations?.length) {
    const d = result.textAnnotations[0].description;
    return { mainText: d ? d : "", annotations: result.textAnnotations };
  }

  return {};
}
