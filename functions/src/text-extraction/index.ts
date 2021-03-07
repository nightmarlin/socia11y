import * as vision from "@google-cloud/vision";

export default async function (img?: Buffer): Promise<string> {
  if (!img) {
    return "";
  }

  const visionClient = new vision.ImageAnnotatorClient();
  const [result] = await visionClient.annotateImage(img);

  return "";
}
