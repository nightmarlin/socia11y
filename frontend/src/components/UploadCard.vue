<template>
  <v-card dark>
    <v-card-title>
      Upload File
    </v-card-title>
    <v-card-text>
      <v-file-input :multiple="false" @change="onSelected" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn light large @click="onConfirm">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UploadCard",

  methods: {
    onSelected(f: File) {
      if (f) {
        let b: Buffer;
        f.arrayBuffer().then(ab => (b = Buffer.from(ab)));

        if (b) {
          this.$store.commit("setBuffer", { buffer: b });
        }
      }
    },

    onConfirm() {
      if (this.$store.state.uploadBuffer) {
        this.$router.push({ path: "/evaluation" });
      }
    }
  }
});
</script>

<style scoped>
/* Styles declared here affect only this component */
</style>
