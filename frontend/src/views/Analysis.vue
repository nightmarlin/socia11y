<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fill-height class="d-inline-flex justify-center">
        <v-row>
          <v-col>
            <AnalysisBar />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "../components/TitleBar.vue";
import AnalysisBar from "../components/AnalysisBar.vue";

export default Vue.extend({
  name: "Analysis",

  components: {
    TitleBar,
    AnalysisBar
  },

  data: () => ({
    //
  })
});
</script>
