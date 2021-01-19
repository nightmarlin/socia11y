<template>
    <div class="upload">
        <input type="file" @change="onSelected">
        <button @click="onUpload">Upload</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Upload",

  data: () => ({
      selectedFile: null,
  }),
  methods: {
      onSelected(e: any){
          this.selectedFile = e.target.files[0]
      },
      onUpload() {
          //Send to backend
          console.log("Uploaded:" + this.selectedFile)
      }
  }
});
</script>

<style>
</style>