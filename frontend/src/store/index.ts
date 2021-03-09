import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type State = {
  requestOptions: { [k: string]: boolean };
  uploadFile?: File;
  cachedResponse?: any;
};

export default new Vuex.Store({
  state(): State {
    return {
      requestOptions: {},
      uploadFile: undefined
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

    setFile(state: State, { file }: { file: File }) {
      console.log("set file", file);
      state.uploadFile = file;
    },

    setResponse(state: State, { body }: { body: any }) {
      console.log("set response", body);
      state.cachedResponse = body;
    }
  },

  actions: {},
  modules: {}
});
