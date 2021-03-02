<template>
  <v-app-bar dark app bottom>
    <v-app-bar-title>Developed by: </v-app-bar-title>
    <v-avatar color="#fff" size=42>GM</v-avatar>
    <v-avatar color="#fff" size=42>LM</v-avatar>
    <v-avatar color="#fff" size=42>LH</v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TitleBar",

  data: () => ({
    //
  })
});
</script>

<style scoped>
.v-avatar {
    margin-left: 10px;
    color: black;
}
</style>
