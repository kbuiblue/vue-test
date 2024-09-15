<script setup>
import Grid from './components/Grid.vue';
import { useGameStateStore } from './stores/gameState';

const gameState = useGameStateStore()

</script>

<template>
  <section>
    <h1 class="text-3xl font-bold text-center mb-8">Tic Tac Toe</h1>
    <div>
        <Grid></Grid>
        <p v-if="gameState.gameEnded">The game has ended</p>
    </div>
  </section>
</template>
