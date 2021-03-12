<template>
  <v-app-bar dark app bottom>
    <v-app-bar-title>
      Developed by:
    </v-app-bar-title>

    <v-tooltip top v-for="member in team" :key="member.name">
      <template v-slot:activator="{ on }">
        <a :href="'https://github.com/' + member.github" v-on="on">
          <v-avatar color="#fff" size="36">
            {{ member.initials }}
          </v-avatar>
        </a>
      </template>
      <span>{{ member.name }}</span>
    </v-tooltip>

    <v-spacer />

    <PingButton />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import PingButton from "./PingButton.vue";

export default Vue.extend({
  name: "TitleBar",

  components: {
    PingButton
  },

  data: (): { team: { name: string; initials: string; github: string }[] } => ({
    team: [
      {
        name: "George Moore",
        initials: "GM",
        github: "mooregt"
      },
      {
        name: "Lewis Miller",
        initials: "LM",
        github: "Nightmarlin"
      },
      {
        name: "Luke Halpin",
        initials: "LH",
        github: "lukehalpin"
      }
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
