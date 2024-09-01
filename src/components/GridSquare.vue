<script setup>
defineProps({
    row: Array,
    id: String,
});
</script>

<template>
    <div
        v-for="(value, index) in row"
        :key="`${id}-${index}`"
        :id="`${id}-${index}`"
        class="border border-black"
    >
        <p v-if="value === null">It is null</p>
    </div>
</template>
