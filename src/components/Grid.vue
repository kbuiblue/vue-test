<script setup>
import GridSquare from "./GridSquare.vue";
import { reactive } from "vue";

const gridState = reactive({
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
});

const gameState = reactive({
    gameEnded: false,
    winner: null,
    players: ["X", "O"],
    playerTurn: null,
});

// set initial gamestate
if (!gameState.gameEnded && !gameState.playerTurn) {
    gameState.playerTurn = gameState.players[0];
}

const updateGameState = () => {
    gameState.playerTurn = gameState.playerTurn === "X" ? "O" : "X";
    console.log(gameState.playerTurn)
};
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-3 w-2/3 h-[80vh] m-auto">
        <GridSquare
            v-for="(key, value) in gridState"
            @update-game-State="updateGameState"
            :row="key"
            :id="value"
        ></GridSquare>
    </div>
</template>
