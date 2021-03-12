<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fill-height class="d-inline-flex justify-center">
        <v-row>
          <v-col md="6">
            <ImagePreview />
          </v-col>

          <v-col md="6">
            <FeedbackDisplay />
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col md="8">
            <OptionCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "../components/TitleBar.vue";
import ImagePreview from "../components/ImagePreview.vue";
import OptionCard from "../components/OptionCard.vue";
import FeedbackDisplay from "../components/FeedbackDisplay.vue";

export default Vue.extend({
  name: "Feedback",

  components: {
    TitleBar,
    ImagePreview,
    OptionCard,
    FeedbackDisplay
  },

  data: () => ({
    //
  })
});
</script>

<style scoped></style>
