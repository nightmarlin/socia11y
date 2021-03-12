<template>
  <v-card dark>
    <v-card-title>
      Analysing your file...
    </v-card-title>
    <v-card-text>
      <v-progress-linear indeterminate color="accent" />
    </v-card-text>
    <v-card-actions>
      <router-link to="/">
        <v-btn light large>Cancel</v-btn>
      </router-link>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnalysisBar",

  async mounted() {
    try {
      await this.$store.dispatch("processRequest");
      this.$router.push({ path: "/feedback" });
    } catch (err) {
      console.error(err);
      this.$router.push({ path: "/" });
    }
  }
});
</script>

<style scoped>
.v-card {
  margin-bottom: 30px;
}
</style>
