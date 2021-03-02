<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="2">
            </v-col>
          <v-col sm="8">
            <OptionCard />
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
import OptionCard from "@/components/OptionCard.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Evaluation",

  components: {
    TitleBar,
    OptionCard,
    Footer
  },

  data: () => ({
    //
  })
});
</script>