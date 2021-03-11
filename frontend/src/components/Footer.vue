<template>
  <v-app-bar dark app bottom>
    <v-app-bar-title>Developed by: </v-app-bar-title>
    <a :href="member.github" v-for="member in team" :key="member.initials">
      <v-avatar color="#fff" size="36">
        {{ member.initials }}
      </v-avatar>
    </a>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

type Data = {
  team: { initials: string; github: string }[];
};

export default Vue.extend({
  name: "TitleBar",

  data: (): Data => ({
    team: [
      { initials: "GM", github: "https://github.com/mooregt" },
      { initials: "LM", github: "https://github.com/Nightmarlin" },
      { initials: "LH", github: "https://github.com/lukehalpin" }
    ]
  })
});
</script>

<style scoped>
.v-avatar {
  margin-left: 10px;
  color: black;
}
</style>
