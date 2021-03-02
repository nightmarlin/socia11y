import * as functions from "firebase-functions";
import { controller } from "./controller";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const region = "europe-west2";

export const ping = functions.region(region).https.onRequest((req, res) => {
  functions.logger.info("recieved ping", req);
  res.send("Pong!");
});

export const process = functions.region(region).https.onRequest((req, res) => {
  functions.logger.info("processing request", req);
  res.send(controller(req.body));
});
