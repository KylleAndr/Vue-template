<script setup>
const rows = [
  [0, 0, 1, 2, 1, 3, 3],
  [1, 0, 1, 2, 2, 3, 1],
  [3, 0, 1, 2, 2, 2, 3],
  [0, 0, 1, 2, 1, 3, 6],
];
</script>

<template>
  <div>
    <svg width="500" height="500" class="bg-gray-100">
      <g v-for="(cols, row) in rows">
        <circle
          v-for="(value, col) in cols"
          :style="{ opacity: 0.2 + value / 15, fill: 'yellow' }"
          :cx="col * 50 + 50"
          :cy="row * 50 + 50"
          :r="value * 10 + 2"
          width="50"
          height="50"
        />
      </g>
    </svg>
  </div>
</template>
