<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="8">
            <router-link to="/">
                <v-btn light large @click="onConfirm">placeholder</v-btn>
            </router-link>
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
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Analysis",

  components: {
    TitleBar,
    Footer
  },

  data: () => ({
    //
  })
});
</script>