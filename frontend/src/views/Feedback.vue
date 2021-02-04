<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "@/components/TitleBar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Feedback",

  components: {
    TitleBar,
    Footer
  },

  data: () => ({
    //
  })
});
</script>