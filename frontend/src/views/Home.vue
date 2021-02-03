<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col sm="4">
            <UploadCard />
          </v-col>
          <v-col sm="8">
            <OptionCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "@/components/TitleBar.vue";
import UploadCard from "@/components/UploadCard.vue";
import OptionCard from "@/components/OptionCard.vue";

export default Vue.extend({
  name: "Home",

  components: {
    TitleBar,
    UploadCard,
    OptionCard
  },

  data: () => ({
    //
  })
});
</script>