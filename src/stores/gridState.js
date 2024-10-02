import { ref } from "vue";
import { defineStore } from "pinia";

export const useGridStateStore = defineStore("gridState", () => {
    const gridState = ref([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const updateGridState = (row, column, playerTurn) => {
        if (!gridState.value[row][column]) {
            gridState.value[row][column] = playerTurn;
        }
    };

    const resetGrid = () => {
        gridState.value = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    };

    return { gridState, updateGridState, resetGrid };
});
