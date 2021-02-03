<template>
  <v-card>
      <h2>Analysing your file...</h2>
      <v-progress-linear indeterminate color="secondary"></v-progress-linear>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnalysisBar",

  data: () => ({
    //
  })
});
</script>

<style scoped>
.v-card {
    margin-bottom: 30px;
}
</style>