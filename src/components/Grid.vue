<script setup>
import GridSquare from "./GridSquare.vue";
import { reactive } from "vue";
import { useGameStateStore } from "../stores/gameState";

const gridState = reactive({
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
});

const gameState = useGameStateStore();

// set initial gamestate
if (!gameState.gameEnded && gameState.turnCount === 0) {
    gameState.setFirstPlayer()
}

const updateGameState = () => {
    gameState.playerTurn = gameState.playerTurn === "X" ? "O" : "X";

    // if gameState.turnCount >= 3 then check if there's a winner
    console.log(gameState);
};

const updateGridState = (rowId, index) => {
    if (!gridState[rowId][index]) {
        gridState[rowId][index] = gameState.playerTurn;
        updateGameState();
    }
    updateTurnCount(rowId, index)

    console.log(gridState);
};

const updateTurnCount = (rowId, index) => {
    gameState.turnCount++;

    if (gameState.turnCount >= 3) {
        findWinnerRow(rowId, gridState[rowId][index]);
    }
};

const findWinnerRow = (rowId, currentPlayer) => {
    const isWinningRow = gridState[rowId].every(
        (cell) => cell === currentPlayer
    );

    if (isWinningRow) {
        console.log(`The winning player is ${currentPlayer}`);
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
