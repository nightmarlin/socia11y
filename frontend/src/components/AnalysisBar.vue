<template>
  <v-card dark>
    <v-card-title>
      Analysing your file...
    </v-card-title>
    <v-card-text>
      <v-progress-linear
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
    </v-card-text>
    <v-card-actions>
      <router-link to="/">
        <v-btn light large>Cancel</v-btn>
      </router-link>
      <v-spacer />
      <router-link to="/feedback">
        <v-btn light large>Temp(confirm)</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Firebase } from "../utils/firebase-wrapper";

export default Vue.extend({
  name: "AnalysisBar",

  mounted() {
    let resBody: any | undefined;

    const firebase = new Firebase();
    firebase
      .process({
        image: this.$store.state.uploadFile,
        options: this.$store.state.requestOptions
      })
      .then(res => (resBody = res))
      .catch(console.log);

    this.$store.commit("setResponse", { body: resBody });

    if (resBody) {
      this.$router.push({ path: "/feedback" });
    }
  }
});
</script>

<style scoped>
.v-card {
  margin-bottom: 30px;
}
</style>
