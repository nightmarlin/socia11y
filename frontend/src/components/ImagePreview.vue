<template>
    <v-card dark>
        <v-card-title>
            Your Image
        </v-card-title>
        <v-card-text>
            <v-img src="@/images/socia11y_white.png" alt="Socia11y logo"></v-img>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImagePreview",

  data: () => ({
    //
  })
});
</script>

<style scoped>
.v-card {
    margin-bottom: 25px;
}
</style>