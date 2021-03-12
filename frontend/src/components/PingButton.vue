<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        @click="ping"
        :loading="status === 'loading'"
        v-on="on"
        :color="color"
        v-bind="attrs"
      >
        <v-icon> mdi-{{ displayIcon }} </v-icon>
      </v-btn>
    </template>
    <span>Check Cloud Connection{{ status ? ": " + status : "" }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";
import { Firebase } from "../utils/firebase-wrapper";

export default Vue.extend({
  name: "PingButton",

  data: function() {
    return {
      status: "unknown"
    };
  },

  methods: {
    ping: function() {
      this.status = "loading";

      const firebase = new Firebase();
      const [setErr, setSuccess] = [this.setErr, this.setSuccess];

      firebase
        .ping({})
        .then(function(res) {
          console.log("ping success", res);
          setSuccess();
        })
        .catch(function(err) {
          console.log("ping failure", err);
          setErr();
        });
    },

    setSuccess: function() {
      this.status = "ready";
      this.color = "success";
    },
    setErr: function() {
      this.status = "unavailable";
      this.color = "error";
    }
  },

  computed: {
    displayIcon(): string {
      switch (this.status) {
        case "ready":
          return "check";
        case "unavailable":
          return "close";
        default:
          return "cloud-question";
      }
    },

    color(): string {
      switch (this.status) {
        case "ready":
          return "success";
        case "unavailable":
          return "error";
        default:
          return "";
      }
    }
  }
});
</script>
