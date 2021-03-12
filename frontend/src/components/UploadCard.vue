<template>
  <v-card dark>
    <v-card-title>
      Upload File
    </v-card-title>
    <v-card-text>
      <v-file-input
        label="Pick an image..."
        accept="image/*"
        :multiple="false"
        @change="onSelected"
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn v-show="hasFile" light large @click="onConfirm">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UploadCard",

  mounted: function() {
    this.$store.commit("resetBuffer");
    this.$store.commit("resetFile");
  },

  data: () => ({ hasFile: false }),

  methods: {
    onSelected(f: File[]) {
      if (f.length > 0) {
        const store = this.$store;
        f[0]
          .arrayBuffer()
          .then(ab => {
            const b = Buffer.from(ab);
            if (b) {
              store.commit("setBuffer", { buffer: b });
              store.commit("setFile", { file: f[0] });
              this.hasFile = true;
            }
          })
          .catch(console.log);
      }
    },

    onConfirm() {
      if (this.$store.state.uploadBuffer && this.$store.state.file) {
        this.$router.push({ path: "/evaluation" });
      }
    }
  }
});
</script>
