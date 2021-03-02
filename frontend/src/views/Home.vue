<template>
  <v-app dark>
    <IndexTitleBar />
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
import IndexTitleBar from "@/components/IndexTitleBar.vue";
import UploadCard from "@/components/UploadCard.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Home",

  components: {
    IndexTitleBar,
    UploadCard,
    Footer
  },

  data: () => ({
    //
  })
});
</script>