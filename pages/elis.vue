<script setup>
const data = [1, 2, 3, 0, 2, 3, 4];
</script>

<template>
    <div>
  <svg width="1000" height="700" class="bg-gray-400">
    <circle v-for="(d, i) in data"
    :style="{ opacity: 0.1 + d / 3, fill: 'black' }"
    :cx="i * 100 + 200"
    cy="150"
    :r="d * 10"
    />

    <circle v-for="(d, i) in data"
    :style="{ opacity: 0.1 + d / 3, fill: 'purple' }"
    :cx="i * 100 + 200"
    cy="250"
    :r="d * 10"
    />

    <circle v-for="(d, i) in data"
    :style="{ opacity: 0.1 + d / 3, fill: 'black' }"
    :cx="i * 100 + 200"
    cy="350"
    :r="d * 10"
    />

    <circle v-for="(d, i) in data"
    :style="{ opacity: 0.1 + d / 3, fill: 'purple' }"
    :cx="i * 100 + 200"
    cy="450"
    :r="d * 10"
    />
    
    <circle v-for="(d, i) in data"
    :style="{ opacity: 0.1 + d / 3, fill: 'black' }"
    :cx="i * 100 + 200"
    cy="550"
    :r="d * 10"
    />
  </svg>
</div>
</template>
