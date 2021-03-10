import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type State = {
  requestOptions: { [k: string]: boolean };
  uploadBuffer?: Buffer;
  cachedResponse?: any;
};

export default new Vuex.Store({
  state(): State {
    return {
      requestOptions: {},
      uploadBuffer: undefined
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
      console.log("set buffer", buffer);
      state.uploadBuffer = buffer;
    },

    setResponse(state: State, { body }: { body: any }) {
      console.log("set response", body);
      state.cachedResponse = body;
    }
  },

  actions: {},
  modules: {}
});
