import * as functions from "firebase-functions";
import { controller } from "./controller";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const region = "europe-west2";

export const ping = functions.region(region).https.onRequest((_, res) => {
  functions.logger.info("recieved ping");
  res.send("Pong!");
});

export const process = functions
  .region(region)
  .https.onRequest(async (req, res) => {
    functions.logger.info("received process request");
    res.send(await controller(req.body));
  });
