<template>
  <v-card dark>
    <v-card-title>
      Analysing your file...
    </v-card-title>
    <v-card-text>
      <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear>
    </v-card-text>
      <v-card-actions>
        <router-link to="/">
          <v-btn light large @click="onConfirm">Cancel</v-btn>
        </router-link>
        <v-spacer />
        <router-link to="/feedback">
          <v-btn light large @click="onConfirm">Temp(confirm)</v-btn>
        </router-link>
      </v-card-actions>
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