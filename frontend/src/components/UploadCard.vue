<template>
  <v-card dark>
    <v-card-title>
      Upload File
    </v-card-title>
    <v-card-text>
      <v-file-input @change="onSelected" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <router-link to="/evaluation">
        <v-btn light large @click="onUpload">Upload</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UploadCard",

  /**
   * "(): T => func" syntax allows type-checking of known properties by defining the well-known
   * type T
   */
  data: (): { selectedFile?: File } => ({}),
  methods: {
    onSelected(e: File) {
      console.log(e);
      this.selectedFile = e;
    },
    onUpload() {
      //Send to backend
      console.log("Uploaded:" + this.selectedFile);
    }
  }
});
</script>

<style scoped>
/* Styles declared here affect only this component */
</style>
