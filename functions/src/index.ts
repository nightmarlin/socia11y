import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const region = "europe-west2";

export const ping = functions.region(region).https.onCall((data: unknown) => {
  functions.logger.info("recieved ping", { data });

  return { data };
});
