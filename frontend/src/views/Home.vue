<template>
  <v-app dark>
    <LogoCard />
    <v-main>
      <v-container fill-height class="d-inline-flex justify-center">
        <v-row class="justify-center">
          <v-col md="8">
            <UploadCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "../components/TitleBar.vue";
import LogoCard from "../components/LogoCard.vue";
import UploadCard from "../components/UploadCard.vue";

export default Vue.extend({
  name: "Home",

  components: {
    TitleBar,
    UploadCard,
    LogoCard
  }
});
</script>
