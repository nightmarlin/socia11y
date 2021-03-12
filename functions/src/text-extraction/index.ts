import * as vision from "@google-cloud/vision";
import * as functions from "firebase-functions";

/**
 *
 * @param img Base 64 encoded image to evaluate
 * @returns
 */
export default async function (
  img?: string
): Promise<{
  text?: string;
  annotations?: vision.protos.google.cloud.vision.v1.ITextAnnotation;
}> {
  functions.logger.debug("extracting text");
  if (!img) {
    return {};
  }

  const client = new vision.ImageAnnotatorClient();
  await client.initialize();

  const [result] = await client.annotateImage({
    image: { content: img },
    features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
  });

  if (result.fullTextAnnotation) {
    const a = result.fullTextAnnotation;
    functions.logger.debug({ annotations: a });

    return {
      text: a.text ? a.text.split("\n").join(" ") : undefined,
      annotations: a,
    };
  }

  return {};
}
