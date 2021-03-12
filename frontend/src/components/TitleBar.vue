<template>
  <v-app-bar dark app>
    <v-app-bar-title>
      <v-img
        max-width="175"
        src="@/images/socia11y_long_2.png"
        alt="Socia11y logo"
        @click="goHome"
      />
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TitleBar",

  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
});
</script>
