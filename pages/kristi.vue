<script setup>
//            0  1  2  3  4  5  6
//            E  T  K  N  R  L  P
const data = [1, 2, 3, 1, 2, 0, 1];
</script>

<template>
  <div>
    <pre v-for="d in data" :style="{ opacity: 0.1 + d / 3 }">{{ d }}</pre>
  </div>
</template>
