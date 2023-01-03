<script setup>
const data = [1, 0, 1, 2, 2, 3, 3];
</script>

<template>
  <div>
    <pre v-for="d in data" :style="{ opacity: 0.1 + d / 3 }"> {{ d }}</pre>
    <svg width="500" height="500" class="bg-gray-100">
      <rect x="50" y="50" width="50" height="50" opacity="0.5" />
    </svg>
  </div>
</template>
