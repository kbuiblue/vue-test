<script setup>
import Grid from "./components/Grid.vue";
import { useGameStateStore } from "./stores/gameState";
import { useGridStateStore } from "./stores/gridState";

const gameStateStore = useGameStateStore();
const gameState = gameStateStore.gameState;

const gridStateStore = useGridStateStore();

const reset = () => {
    gameStateStore.$reset()
    gridStateStore.$reset()
}
</script>

<template>
    <section>
        <h1 class="text-3xl font-bold text-center mb-8">Tic Tac Toe</h1>
        <div class="flex flex-col justify-center items-center">
            <Grid></Grid>
            <h2 class="text-center" v-if="gameState.gameEnded">
                The game has ended. The winner is {{ gameState.winner }}
            </h2>
            <button @click="reset()" class="border rounded border-black px-4 py-2 mt-4">
                Restart?
            </button>
        </div>
    </section>
</template>
