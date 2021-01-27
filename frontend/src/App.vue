<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="4">
            <UploadCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "./components/TitleBar.vue";
import UploadCard from "./components/UploadCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    TitleBar,
    UploadCard
  },

  data: () => ({
    //
  })
});
</script>
