import { ref } from "vue";
import { defineStore } from "pinia";

export const useGameStateStore = defineStore("gameState", () => {
    const gameState = ref({
        gameEnded: false,
        turnCount: 0,
        winner: null,
        players: ["X", "O"],
        playerTurn: null,
    });

    const updatePlayerTurn = () => {
        gameState.value.playerTurn =
            gameState.value.playerTurn === "X" ? "O" : "X";
    }
    const setFirstPlayer = () => {
        gameState.value.playerTurn = gameState.value.players[0];
    }

    const incrementTurnCount = () => {
        gameState.value.turnCount++;
    }

    const $reset = () => {
        console.log("clicked")
        if (gameState.value) {
            gameState.value.gameEnded = false;
            gameState.value.turnCount = 0;
            gameState.value.winner = null;
            gameState.value.playerTurn = null;
        }
    }

    return { gameState, updatePlayerTurn, setFirstPlayer, incrementTurnCount, $reset };
});
