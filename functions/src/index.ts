/**
 * Entrypoint for firebase functions. This file is the only one with access to the sender's IP and
 * sensitive data. Note that we only care about the data sent in request bodies, if at all.
 */

import * as functions from "firebase-functions";
import { controller } from "./controller";

const region = "europe-west2";

export const ping = functions.region(region).https.onCall(() => {
  functions.logger.info("recieved ping");
  return "pong!";
});

export const process = functions.region(region).https.onCall(async (data) => {
  functions.logger.info("received process request");
  return await controller(data);
});
