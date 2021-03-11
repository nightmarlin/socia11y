/**
 * Entrypoint for firebase functions. This file is the only one with access to the sender's IP and
 * sensitive data. Note that we only care about the data sent in request bodies, if at all.
 */

import * as functions from "firebase-functions";
import { controller } from "./controller";
import * as cors from "cors";

const corsHandler = cors({ origin: true });
const region = "europe-west2";

export const ping = functions.region(region).https.onRequest((req, res) =>
  corsHandler(req, res, async () => {
    functions.logger.info("recieved ping");
    res.send("pong!");
  })
);

export const process = functions
  .region(region)
  .https.onRequest(async (req, res) =>
    corsHandler(req, res, async () => {
      functions.logger.info("received process request");
      res.send(await controller(req.body));
    })
  );
