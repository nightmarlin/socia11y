<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <Upload />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Upload from "./components/Upload.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Upload,
  },

  data: () => ({
    //
  }),
});
</script>
