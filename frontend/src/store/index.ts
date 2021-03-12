import Vue from "vue";
import Vuex from "vuex";
import { Firebase } from "../utils/firebase-wrapper";

Vue.use(Vuex);

type State = {
  requestOptions: { [k: string]: boolean };
  file?: File;
  uploadBuffer?: string;
  cachedResponse?: any;
};

export default new Vuex.Store({
  state(): State {
    return {
      requestOptions: {}
    };
  },

  mutations: {
    setOption(state: State, { k, v }: { k: string; v: boolean }) {
      console.log(`set option '${k}': ${v}`);
      state.requestOptions[k] = v;
    },

    resetOptions(state: State) {
      console.log("reset options");
      state.requestOptions = {};
    },

    setBuffer(state: State, { buffer }: { buffer: Buffer }) {
      console.log("set buffer", buffer.toString("base64"));
      state.uploadBuffer = buffer.toString("base64");
    },

    resetBuffer(state: State) {
      console.log("reset buffer");
      state.uploadBuffer = undefined;
    },

    setFile(state: State, { file }: { file: File }) {
      console.log("set file", file.name);
      state.file = file;
    },

    resetFile(state: State) {
      console.log("reset file");
      state.file = undefined;
    },

    setResponse(state: State, { body }: { body: any }) {
      console.log("set response", body);
      state.cachedResponse = body;
    },

    resetResponse(state: State) {
      console.log("reset response");
      state.cachedResponse = undefined;
    }
  },

  getters: {
    hasResponse(state) {
      return typeof state.cachedResponse === "object";
    },

    hasFile(state) {
      return typeof state.file === "object";
    }
  },

  actions: {
    async processRequest(ctx) {
      ctx.commit("resetResponse");

      const res = await new Firebase().process({
        image: ctx.state.uploadBuffer,
        options: ctx.state.requestOptions
      });

      ctx.commit("setResponse", { body: res });
    }
  }
});
