<script setup>
import Grid from "./components/Grid.vue";
import { storeToRefs } from "pinia";
import { useGameStateStore } from "./stores/gameState";
import { useGridStateStore } from "./stores/gridState";

const gameStateStore = useGameStateStore();
const { gameState } = storeToRefs(gameStateStore);

const gridStateStore = useGridStateStore();

const reset = () => {
    gameStateStore.resetGame();
    gridStateStore.resetGrid();
    gameStateStore.setFirstPlayer();
};
</script>

<template>
    <section>
        <h1 class="text-3xl font-bold text-center mb-8">Tic Tac Toe</h1>
        <div class="flex flex-col justify-center items-center">
            <Grid></Grid>
            <h2 class="text-center" v-if="gameState.gameEnded && gameState.winner !== null">
                The game has ended. The winner is {{ gameState.winner }}
            </h2>
            <h2 v-else-if="gameState.gameEnded && gameState.winner === null">
                The game has ended. It's a draw.
            </h2>
            <button
                @click="reset()"
                class="border rounded border-black px-4 py-2 mt-4"
            >
                Restart?
            </button>
        </div>
    </section>
</template>
