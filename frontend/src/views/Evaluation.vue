<template>
  <v-app dark>
    <TitleBar />
    <v-main>
      <v-container fill-height class="d-inline-flex justify-center">
        <v-row>
          <v-col>
            <OptionCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TitleBar from "../components/TitleBar.vue";
import OptionCard from "../components/OptionCard.vue";

export default Vue.extend({
  name: "Evaluation",

  components: {
    TitleBar,
    OptionCard
  },

  data: () => ({
    //
  })
});
</script>
