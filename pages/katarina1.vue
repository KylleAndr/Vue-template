<script setup>
//  i         0   1   2  3  4   5  6   

import { valueToNode } from '@babel/types';

//            E   T   K  N  R   L  P
const data = [12, 11, 8, 8,	10,	7, 9];
</script>

<template>
  <div>
  <pre v-for="(d, i) in data" :style="{ opacity:0.1 + d / 3 }">{{ d }}</pre>
  <svg width="1000" height="1000" class="bg-gray-100">
   <circle
   v-for="(d, i) in data"
   :style="{ opacity: 0.1 + value / 10, fill: 'black' }"
        :cx="i * 50 + 50"
        cy="50"
        :r="d * 5"
        width="10"
        height="10"
   />
  </svg>
  </div>
</template>
