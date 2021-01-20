<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <UploadCard />
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
