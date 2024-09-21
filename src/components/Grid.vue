<script setup>
import GridSquare from "./GridSquare.vue";
import { useGameStateStore } from "../stores/gameState";
import { useGridStateStore } from "../stores/gridState";

// const gridState = reactive({
//     row1: [null, null, null],
//     row2: [null, null, null],
//     row3: [null, null, null],
// });

const gameStateStore = useGameStateStore();
const gameState = gameStateStore.gameState;

const gridStateStore = useGridStateStore();
const gridState = gridStateStore.gridState;

// set initial gamestate
if (!gameState.gameEnded && gameState.turnCount === 0) {
    gameStateStore.setFirstPlayer();
}

const updateGridState = (rowId, index) => {
    if (!gridState[rowId][index]) {
        gridStateStore.updateGridState(rowId, index, gameState.playerTurn);
        gameStateStore.updatePlayerTurn();
        updateTurnCount(rowId, index);
    }
    console.log(gridState);
};

const updateTurnCount = (rowId, index) => {
    gameStateStore.incrementTurnCount();

    if (gameState.turnCount >= 3) {
        findWinnerRow(rowId, gridState[rowId][index]);
    }
};

const findWinnerRow = (rowId, currentPlayer) => {
    const isWinningRow = gridState[rowId].every(
        (cell) => cell === currentPlayer
    );

    if (isWinningRow) {
        gameState.winner = currentPlayer;
        gameState.gameEnded = true;
    }
};
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-3 w-2/3 h-[80vh] m-auto">
        <GridSquare
            v-for="(rowArray, rowId) in gridState"
            @update-grid-state="updateGridState"
            :row-array="rowArray"
            :row-id="rowId"
        ></GridSquare>
    </div>
</template>
