<template>
  <v-app dark>
    <LogoCard />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="3">
          </v-col>
          <v-col sm="6">
            <UploadCard />
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
import LogoCard from "@/components/LogoCard.vue";
import UploadCard from "@/components/UploadCard.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Home",

  components: {
    TitleBar,
    UploadCard,
    Footer,
    LogoCard
  },

  data: () => ({
    //
  })
});
</script>
