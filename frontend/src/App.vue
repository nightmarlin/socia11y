<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <h2>SOCIA11Y</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Nightmarlin/socia11y"
        target="_blank"
        text
      >
        <span class="mr-2">SOCIA11Y repository</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Counter />
      <v-divider></v-divider>
      <Developers />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Counter from "./components/Counter.vue";
import Developers from "./components/Developers.vue";

export default Vue.extend({
  name: "App",

  components: {
    Counter,
    Developers,
  },

  data: () => ({
    //
  })
});
</script>

<style scoped>
.v-main {
  margin-top: 25px;
}
.v-divider {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
