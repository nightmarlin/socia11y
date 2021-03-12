<template>
  <v-card dark>
    <v-card-title>
      Your Feedback
    </v-card-title>
    <v-card-text>
      <h3 align="left">
        Text Extracted:
      </h3>
      <p align="left">{{ extracted ? extracted : "No text found" }}</p>

      <h3 align="left">Results:</h3>
      <p v-if="metricFeedback.length === 0" align="left">
        No text found, no text metric results available.
      </p>
      <p v-for="f in metricFeedback" :key="f.k" align="left">
        <b>
          {{ f.n }} [
          <i>{{ f.s }}%</i>
          ]:
        </b>
        {{ f.e }}
      </p>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Metrics } from "../../../functions/src/types";

export default Vue.extend({
  name: "FeedbackDisplay",

  data: () => ({
    //
  }),

  computed: {
    img(): File | null {
      if (this.$store.state.file) {
        const imgBuf: File = this.$store.state.file;
        return imgBuf;
      }
      return null;
    },

    extracted(): string {
      if (this.$store.state.cachedResponse) {
        return this.$store.state.cachedResponse.extractedImageText;
      }
      return "";
    },

    metricFeedback(): { k: string; n: string; e: string; s: string }[] {
      if (this.$store.state.cachedResponse) {
        const m: Metrics = this.$store.state.cachedResponse.metrics;
        const res = [];
        for (const [k, v] of Object.entries(m)) {
          if (!v || !k) continue;

          res.push({
            k,
            n: v.name,
            e: v.explanation,
            s: v.score
          });
        }
        return res;
      }
      return [];
    }
  }
});
</script>
