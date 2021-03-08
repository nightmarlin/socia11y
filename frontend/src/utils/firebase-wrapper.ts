import firebase from "firebase";
import { RequestBody, ResponseBody } from "../../../functions/src/types";

export class Firebase {
  public readonly app: firebase.app.App;
  public readonly functions: firebase.functions.Functions;

  /**
   *
   */
  constructor() {
    const {
      VUE_APP_API_KEY: apiKey,
      VUE_APP_AUTH_DOMAIN: authDomain,
      VUE_APP_PROJECT_ID: projectId,
      VUE_APP_STORAGE_BUCKET: storageBucket,
      VUE_APP_MESSAGING_SENDER_ID: messagingSenderId,
      VUE_APP_APP_ID: appId,
      VUE_APP_MEASUREMENT_ID: measurementId
    } = process.env;

    this.app = firebase.initializeApp({
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId
    });

    this.functions = this.app.functions("europe-west2");
  }

  /**
   * process
   */
  public async process(evalRequest: RequestBody): Promise<ResponseBody> {
    return (await this.functions.httpsCallable("process")(evalRequest)).data;
  }

  /**
   * ping
   */
  public async ping(data: unknown): Promise<{ data: unknown }> {
    return (await this.functions.httpsCallable("ping")(data)).data;
  }
}
