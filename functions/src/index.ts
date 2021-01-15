import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const region = "europe-west2";

export const ping = functions.region(region).https.onRequest((req, res) => {
  functions.logger.info("recieved ping", req, { structuredData: true });
  res.send("Pong!");
});
