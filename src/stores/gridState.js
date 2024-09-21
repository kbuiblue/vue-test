import { ref } from "vue";
import { defineStore } from "pinia";

export const useGridStateStore = defineStore("gridState", () => {
    const gridState = ref({
        row1: [null, null, null],
        row2: [null, null, null],
        row3: [null, null, null],
    });

    const updateGridState = (rowId, index, playerTurn) => {
        if (!gridState.value[rowId][index]) {
            gridState.value[rowId][index] = playerTurn;
        }
    };

    const $reset = () => {
      gridState.value.row1 = [null, null, null]
      gridState.value.row2 = [null, null, null]
      gridState.value.row3 = [null, null, null]
    }

    return { gridState, updateGridState, $reset };
});
