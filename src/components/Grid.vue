<script setup>
import GridSquare from "./GridSquare.vue";
import { storeToRefs } from "pinia";
import { useGameStateStore } from "../stores/gameState";
import { useGridStateStore } from "../stores/gridState";

const gameStateStore = useGameStateStore();
const { gameState } = storeToRefs(gameStateStore);

const gridStateStore = useGridStateStore();
const { gridState } = storeToRefs(gridStateStore);

// set initial gamestate
if (!gameState.value.gameEnded && gameState.value.turnCount === 0) {
    gameStateStore.setFirstPlayer();
}

const updateGrid = (row, column) => {
    if (!gridState.value[row][column]) {
        gridStateStore.updateGridState(row, column, gameState.value.playerTurn);
        gameStateStore.updatePlayerTurn();
        gameStateStore.incrementTurnCount();

        if (gameState.value.turnCount >= 9) {
            endGame();
            return;
        }

        if (gameState.value.turnCount >= 3) {
            const winner = findWinner();
            if (winner) {
                endGame(winner);
            }
        }
    }
};

const endGame = (winner = null) => {
    gameState.value.winner = winner;
    gameState.value.gameEnded = true;
};

const findWinner = () => {
    for (let i = 0; i < gridState.value.length; i++) {
        if (
            checkLine(
                gridState.value[i][0],
                gridState.value[i][1],
                gridState.value[i][2]
            )
        ) {
            return gridState.value[i][0];
        }
    }

    for (let i = 0; i < gridState.value[0].length; i++) {
        if (
            checkLine(
                gridState.value[0][i],
                gridState.value[1][i],
                gridState.value[2][i]
            )
        ) {
            return gridState.value[0][i];
        }
    }

    if (
        checkLine(
            gridState.value[0][0],
            gridState.value[1][1],
            gridState.value[2][2]
        )
    ) {
        return gridState.value[0][0];
    } else if (
        checkLine(
            gridState.value[0][2],
            gridState.value[1][1],
            gridState.value[2][0]
        )
    ) {
        return gridState.value[0][2];
    }

    return null;
};

const checkLine = (square1, square2, square3) => {
    return square1 !== null && square1 === square2 && square2 === square3;
};
</script>

<template>
    <div
        class="grid grid-cols-3 grid-rows-3 w-2/3 max-w-screen-md h-[80vh] m-auto"
    >
        <GridSquare
            v-for="(row, rowId) in gridState"
            @update-grid="updateGrid"
            :row="row"
            :rowId="rowId"
        ></GridSquare>
    </div>
</template>
