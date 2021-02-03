<template>
  <v-card dark>
    <v-card-title>
      Feedback Options
    </v-card-title>
    <v-card-text>
      <v-checkbox
        v-for="criterion in criteria"
        :key="criterion.name"
        :label="criterion.name"
        v-model="criterion.enabled"
      />
      <h2>Do you have alt-text/an image description?</h2>
      <v-radio-group column>
        <v-radio label="Yes"></v-radio>
        <v-radio label="No"></v-radio>
      </v-radio-group>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <router-link to="/">
        <v-btn light large @click="onConfirm">Confirm</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// let checkboxes: string[] = ["Colour contrast", "Colourblindness"];
let criteria: { name: string; enabled: boolean }[] = [
  { name: "Colour Contrast", enabled: false },
  { name: "Colourblindness", enabled: false },
  { name: "Readbility", enabled: false },
  { name: "Text proportion", enabled: false },
  { name: "Sentence length", enabled: false },
  { name: "Word complexity", enabled: false },
  { name: "Font type", enabled: false },
  { name: "Font size", enabled: false }
];

export default Vue.extend({
  name: "OptionCard",

  data: function() {
    return {
      criteria
    };
  },

  methods: {
    onConfirm: function() {
      console.log(this.criteria);
    }
  }
});
</script>

<style scoped></style>
