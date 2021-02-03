<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <router-link to="/">
          <v-btn light large @click="onConfirm">Go back</v-btn>
        </router-link>
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
  name: "Home",

  components: {
    TitleBar,
    Footer
  },

  data: () => ({
    //
  })
});
</script>