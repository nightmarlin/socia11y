<template>
  <v-card dark>
    <v-card-title>
      Feedback Options
      <v-col class="text-left">
        <v-dialog v-model="dialog" width="1000">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on">
              <v-icon medium>mdi-information</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              Metric Information
            </v-card-title>
            <v-card-text class="text-left">
              <h2>Colour contrast</h2>
              <p>People who suffer from less than perfect vision can find it difficult to
read text that is a similar colour to the background it is on or when the backgroun
is an image. To avoid this you should use solid backgrounds around text that are 
a good contrast for the reader. examples of good contrast are black and white, 
blue and yellow or maybe purple and green (these vary depending on the shade of the
colour). A good test is if it is easy to read from a distance it is more likely to
be okay.</p>
              <h2>Colourblindness</h2>
              <p>Some people who suffer from colour blindness can find it difficult to tell the difference
between certain colours. Because of this it is important to avoid certain colour combinations
to ensure that the content is accessible to them. (maybe include a link to something
that shows how people see different colours)</p>
              <h2>Text proportion</h2>
              <p>The reason it is important to try and reduce the ammount of text is that big blocks
of text can be both off putting and itimidating and can lead to people trying to skim
the text and possibly missing important information. It can also make it harder
to focus on the text.</p>
              <h2>Sentence length</h2>
              <p>Some people can struggle to understand and focus on overly complex sentences, this
can lead to them not engaging or remembering the content they have just been shown.
This can be avoided by using short sentences as much as possible to help keep the
content easy to engage with. We are using 15-20 words as an average for how long a
sentence should be.</p>
              <h2>Word complexity</h2>
              <p>To ensure people fully understand a text it is important to try and use easy to 
understand words that are used in an every day context. Due to the complexity
of this metric we are just going off word length the same way as with sentences
under the assumption that shorter words tend to be less complicated. This helps
the reader maintain focus and not have to spend time looking up words to understand 
the full text. It is also sometimes beneficial to people who suffer from dslexia.</p>
              <h2>Font type</h2>
              <p>Reccomend certain fonts as good and bad</p>
              <h2>Font size</h2>
              <p>Ensure the font size and thickness is sufficient compared to the overall image</p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-card-title>
    <v-card-text>

      <v-checkbox
        v-for="criterion in criteria"
        :key="criterion.name"
        :label="criterion.name"
        v-model="criterion.enabled"
      />

      <v-col class="text-left">
        <h2>Do you have alt-text/an image description?</h2>
        <v-radio-group column>
          <v-radio label="Yes"></v-radio>
          <v-radio label="No"></v-radio>
        </v-radio-group>
      </v-col>

    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <router-link to="/analysis">
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

<style scoped>
.v-btn {
  margin-bottom: 25px;
  margin-top: 25px;
}
</style>
