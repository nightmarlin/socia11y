<template>
  <v-app-bar dark app height="600px">
      <v-container>
        <h1>SOCIA11Y</h1>
        <h2>Upload a file to get started...</h2>
      </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexTitleBar",

  data: () => ({
    //
  })
});
</script>

<style scoped>
h1 {
    font-size: 96px;
}
</style>