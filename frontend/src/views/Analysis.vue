<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="2"></v-col>
          <v-col sm="8">
            <AnalysisBar />
            <router-link to="/">
                <v-btn light large @click="onConfirm">placeholder</v-btn>
            </router-link>
          </v-col>
          <v-col sm="2"></v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "@/components/TitleBar.vue";
import AnalysisBar from "@/components/AnalysisBar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Analysis",

  components: {
    TitleBar,
    AnalysisBar,
    Footer
  },

  data: () => ({
    //
  })
});
</script>