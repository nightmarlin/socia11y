<template>
  <v-card dark>
    <v-card-title>
      Feedback Options
    </v-card-title>
    <v-card-text>
      <!-- <v-checkbox label="Colour contrast"></v-checkbox> -->
      <!-- <v-checkbox label="Colourblindness"></v-checkbox> -->
      <!-- <v-checkbox label="Readability"></v-checkbox>
      <v-checkbox label="Text proportion"></v-checkbox>
      <v-checkbox label="Sentence length"></v-checkbox>
      <v-checkbox label="Word complexity"></v-checkbox>
      <v-checkbox label="Font type"></v-checkbox>
      <v-checkbox label="Font size"></v-checkbox> -->
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
      <v-btn light large @click="onConfirm">Confirm</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// let checkboxes: string[] = ["Colour contrast", "Colourblindness"];
let criteria: { name: string; enabled: boolean }[] = [
  { name: "Colour Contrast", enabled: false },
  { name: "Colourblindness", enabled: false }
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
