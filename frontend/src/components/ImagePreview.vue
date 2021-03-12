<template>
  <v-card dark>
    <v-card-title>
      Your Image
    </v-card-title>
    <v-card-text>
      <v-img :src="file" alt="Your image"></v-img>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImagePreview",

  computed: {
    file(): string {
      const f = this.$store.state.file;
      if (f) {
        return URL.createObjectURL(f);
      }
      return "";
    }
  }
});
</script>

<style scoped>
.v-card {
  margin-bottom: 25px;
}
</style>
