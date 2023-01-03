<script setup>
const data = [4, 2, 3, 5, 3, 1, 2];
</script>

<template>
  <div>
  <pre v-for="d in data" :style="{ opacity: d / 3 }">{{ d }}</pre>
  <svg width="500" height="500" class="bg-gray-100">
   <circle
   v-for="(d, i) in data"
   :style="{ opacity: 0.1 + d / 3, fill: 'red' }"
        :cx="i * 50 + 50"
        cy="50"
        :r="d * 10"
        width="50"
        height="50"
   />
    
  </svg>
</div>
</template>
