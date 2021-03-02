import * as functions from "firebase-functions";
import { controller } from "./controller";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const region = "europe-west2";

export const ping = functions.region(region).https.onCall((data: unknown) => {
  functions.logger.info("recieved ping", { data });

  return { data };
});

export const process = functions.region(region).https.onRequest((req, res) => {
  functions.logger.info("processing request", req, { structuredData: true });
  res.send(controller(req.body));
});
