<template>
  <v-card dark>
    <v-card-title>
      <v-col align="left">
        Feedback Options
      </v-col>

      <v-col align="right">
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn light v-bind="attrs" v-on="on">
              <v-icon left>mdi-information</v-icon>
              About Our Metrics
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Metric Information</v-card-title>
            <v-card-text class="text-left">
              <h2>Colour contrast</h2>
              <p>
                For people who may suffer from certain visual impairments, it
                can be difficult to differentiate between certain colours. This
                can be mean certain colours will more easily blend together when
                similar shades, or just be harder to read due to the lack of
                contrast. It can also mean that text on an image background is
                hard to read. It is important to make sure you use solid colours
                with good contrast to the text colours so that everyone is able
                to easily make sense of your content.
              </p>
              <h2>Colourblindness</h2>
              <p>
                For people who are colour blind some colours do not appear as
                they would to someone with normal colour perception. This can
                mean that certain colours, which may have very good contrast to
                someone, might be almost identical to someone else. It is
                important to keep this in mind when making content and choosing
                colour pallets so that everyone can engage with your content.
              </p>
              <h2>Overall text quantity</h2>
              <p>
                When it comes to getting information across it is important to
                make the information as easy to take in as possible. One of the
                barriers to this can be big blocks of text which are difficult
                to find key information in. To avoid this, graphics should have
                a relatively low amount of text on them, and just have key
                information that the user needs.
              </p>
              <h2>Sentence length</h2>
              <p>
                For readability of text it can be helpful to not have sentences
                that are too long. This can help make the text easier to follow
                without it becoming confusing. Equally using too many short
                sentences can also be detrimental to the readability as they can
                make text feel clunky and disjointed. Ideally a sentence should
                aim to convey a meaningful amount of information without
                becoming too long.
              </p>
              <h2>Word complexity</h2>
              <p>
                To ensure people fully understand a text it is important to try
                and use easy to understand words that are used in an every day
                context. Due to the complexity of this metric we are just going
                off word length the same way as with sentences under the
                assumption that shorter words tend to be less complicated. This
                helps the reader maintain focus rather than having to spend time
                looking up words to understand the full text. It is also
                sometimes beneficial to people who suffer from dyslexia.
              </p>
              <h2>Font type</h2>
              <p>
                Font type is a very important factor when it comes to how
                readable text is. To make your text as readable as possible try
                and use clear fonts without styles that imitate hand written or
                italics.
              </p>
              <h2>Font size</h2>
              <p>
                Another factor for making text readable is the size of the font.
                This can be dependant on the font type that is being used, but
                generally we would recommend a minimum font size of 12 with
                relatively thick lettering to make sure the text stands out
                easily against the background.
              </p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-card-title>

    <v-card-text>
      <v-checkbox
        v-for="option of chosenOptions"
        :key="option.id"
        :label="toCapitalisedName(option.id)"
        v-model="option.value"
        :disabled="isReadOnly"
      />
    </v-card-text>

    <v-card-actions>
      <v-col>
        <router-link v-show="!isReadOnly" to="/analysis">
          <v-btn light block @click="onConfirm">Confirm</v-btn>
        </router-link>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "OptionCard",

  mounted() {
    console.log("route name", this.$route.name);
    if (this.$route.name === "Evaluation") {
      this.$store.commit("resetOptions");
    } else {
      for (const [id, value] of Object.entries(
        this.$store.state.requestOptions
      )) {
        this.chosenOptions = this.chosenOptions.map(elem =>
          elem.id === id && typeof value === "boolean"
            ? { id, value }
            : { id: elem.id, value: elem.value }
        );
      }
      this.isReadOnly = true;
    }
  },

  data(): {
    dialog: boolean;
    chosenOptions: {
      id: string;
      value: boolean;
    }[];
    isReadOnly: boolean;
  } {
    return {
      dialog: false,
      chosenOptions: [
        { id: "sentenceLength", value: false },
        { id: "contrast", value: false }
      ],
      isReadOnly: false
    };
  },

  methods: {
    onConfirm() {
      for (const option of this.chosenOptions) {
        this.$store.commit("setOption", { k: option.id, v: option.value });
      }
      console.log(this.$store.state);
    },

    toCapitalisedName: (s: string): string =>
      s
        .split(/(?=[A-Z])/)
        .map(substr =>
          substr.length > 0
            ? substr.charAt(0).toUpperCase() + substr.slice(1)
            : substr
        )
        .join(" ")
        .trim()
  }
});
</script>
