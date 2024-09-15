import { reactive } from "vue";
import { defineStore } from "pinia";

export const useGameStateStore = defineStore("gameState", () => {
    const gameState = reactive({
        gameEnded: false,
        turnCount: 0,
        winner: null,
        players: ["X", "O"],
        playerTurn: null,
    });

    const updatePlayerTurn = () => (gameState.playerTurn === "X" ? "O" : "X");
    function setFirstPlayer() {
        gameState.playerTurn = gameState.players[0];
    }

    function incrementTurnCount() {
        gameState.turnCount++;
    }

    return {gameState, updatePlayerTurn, setFirstPlayer, incrementTurnCount}
});
