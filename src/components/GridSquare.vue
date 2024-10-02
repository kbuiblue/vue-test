<script setup>

const props = defineProps({
    row: Array,
    rowId: Number
});

const emit = defineEmits(["updateGrid"]);

const getSquareId = (index) => `row${props.rowId}-${index}`;

const handleClick = (index) => {
    emit('updateGrid', props.rowId, index);
};
</script>

<template>
    <div
        v-for="(value, index) in row"
        :key="getSquareId(index)"
        @click="handleClick(index)"
        class="border border-black"
    >
        <p v-if="value === 'X'">X</p>
        <p v-else-if="value === 'O'">0</p>
        <p v-else></p>
</div>
</template>
