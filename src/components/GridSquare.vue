<script setup>

const props = defineProps({
    rowArray: Array,
    rowId: String,
});

const emit = defineEmits(["updateGridState"]);

const getSquareId = (index) => `${props.rowId}-${index}`;

const handleClick = (index) => {
    emit('updateGridState', props.rowId, index);
};
</script>

<template>
    <div
        v-for="(value, index) in rowArray"
        :key="getSquareId(index)"
        @click="handleClick(index)"
        class="border border-black"
    >
        <p v-if="value === 'X'">X</p>
        <p v-else-if="value === 'O'">0</p>
        <p v-else></p>
</div>
</template>
