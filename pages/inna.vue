

<script setup>

// i          0  1  2  3  4  5  6

//            E  T  K  N  R  L  P

const data = [33, 38, 51, 31, 66, 53, 14];

</script>



<template>

  <div>

    <pre v-for="(d, i) in data" :style="{ opacity: 0.1 + d / 3 }">{{ d }}</pre>

    <svg width="500" height="1000" class="bg-gray-100">

      <circle

        v-for="(d, i) in data"

        :style="{ opacity: 0.2 + d / 66, fill: 'violet' }"

        :cx="i * 50 + 50"

        cy="50"

        :r="d * 0.4"

        width="50"

        height="50"

      />

    </svg>

  </div>

</template>