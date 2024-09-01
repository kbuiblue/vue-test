<script setup>
import GridSquare from "./GridSquare.vue";
import { reactive } from "vue";

const gridState = reactive({
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
});
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-3 w-2/3 h-[80vh] m-auto">
        <GridSquare v-for="(key, value) in gridState" :row="key" :id="value"></GridSquare>
    </div>
</template>
