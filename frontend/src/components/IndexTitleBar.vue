<template>
  <v-app-bar dark app height="600px">
      <v-container>
        <v-img max-width="450" src="@/images/socia11y_white.png" alt="Socia11y logo" class="center"></v-img>
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>