<template>
  <v-card dark app height="650px" class="rounded-0">
    <v-card-text>
      <v-img
        class="mx-auto"
        width="450px"
        src="@/images/socia11y_white.png"
        alt="Socia11y logo"
      />

      <h2>The Social Media Accessibility Evaluator</h2>
      <h3>Upload a file to get started...</h3>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LogoCard"
});
</script>

<style scoped>
.v-card {
  margin-bottom: 15px;
}
h2 {
  color: white;
}
</style>
