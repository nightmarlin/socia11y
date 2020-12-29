<template>
    <div id ="counter">
        <h1>Counter</h1>
        <h4>{{ counter }}</h4>
        <v-container>
        <v-btn @click="incrementCounter()">Increase</v-btn>
        <v-btn @click="decrementCounter()">Decrease</v-btn>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Counter",
    data: () => ({
        counter: 0,

        incrementCounter(){
            this.counter++;
        },

        decrementCounter(){
            this.counter = this.counter - 1;
        },
    })
});
</script>

<style scoped>
h1 {
    text-align: center;
}
h4 {
    text-align: center;
}
.container {
    text-align: center;
}
.v-btn {
    margin-left: 5px;
    margin-right: 5px;
}
</style>