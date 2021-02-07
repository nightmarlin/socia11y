<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
            <v-col sm="1">
            </v-col>
            <v-col sm="5">
              <ImagePreview />
              <OptionCard />
            </v-col>
            <v-col sm="5">
              <FeedbackDisplay />
            </v-col>
            <v-col sm="1">
            </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "@/components/TitleBar.vue";
import ImagePreview from "@/components/ImagePreview.vue"
import OptionCard from "@/components/OptionCard.vue";
import FeedbackDisplay from "@/components/FeedbackDisplay.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Feedback",

  components: {
    TitleBar,
    ImagePreview,
    OptionCard,
    FeedbackDisplay,
    Footer
  },

  data: () => ({
    //
  })
});
</script>

<style scoped>
</style>