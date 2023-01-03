<script setup>
//  i         0  1  2  3  4  5  6   

import { text } from 'stream/consumers';

</script>

<template>
  <div>
  <pre v-for="(d, i) in data" :style="{ opacity:0.1 + d / 3 }">{{ d }}</pre>
  <svg width="950" height="500" class="bg-gray-100">
    <text x="130" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         E 
      </text>
      <text x="250" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         T 
      </text>
      <text x="360" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         K
      </text>
      <text x="470" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         N 
      </text>
      <text x="580" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         R 
      </text>
      <text x="690" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         L 
      </text>
      <text x="800" y="100" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'blue' >
         P 
      </text>
      <text x="40" y="130" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         KR
      </text>
      <text x="40" y="160" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         KR
      </text>
      <text x="40" y="190" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         KA
      </text>
      <text x="40" y="220" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         KA
      </text>
      <text x="40" y="250" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         TI
      </text>
      <text x="40" y="280" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         MA
      </text>
      <text x="40" y="310" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         KA
      </text>
      <text x="40" y="340" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         EL
      </text>
      <text x="40" y="370" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         EL
      </text>
      <text x="40" y="400" opacity="1" fontFamily="sans-serif" font-size="25" fill="blue">
         UL
      </text>
    <text x="90" y="130" opacity="0.75" fontFamily="sans-serif" font-size="30" fill="hotpink">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="130" opacity="0.75" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="130" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="130" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="130" opacity="0.75" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="130" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="130" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="160" opacity="0.5" fontFamily="sans-serif" font-size="30" fill="green">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="160" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="160" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="160" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="160" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="160" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="160" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill="green">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="190" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="220" opacity="0.5" fontFamily="sans-serif" font-size="30" fill="hotpink">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="220" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="220" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="220" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="220" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="220" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="220" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="250" opacity="1" fontFamily="sans-serif" font-size="30" fill="orange">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="250" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="250" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="250" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="250" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="250" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="250" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="280" opacity="0.5" fontFamily="sans-serif" font-size="30" fill="green">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="280" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="280" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="280" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="280" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="280" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="280" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="310" opacity="0.5" fontFamily="sans-serif" font-size="30" fill="hotpink">
         ರ⁠╭⁠╮⁠ರ
      </text>
      <text x="210" y="310" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="310" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="310" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="310" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="310" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="310" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'red' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="340" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="210" y="340" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="340" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="340" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="340" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="340" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="340" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="370" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="210" y="370" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="370" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="370" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'green' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="370" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="370" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="370" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="90" y="400" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="210" y="400" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="320" y="400" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'orange' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="430" y="400" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="540" y="400" opacity="0.5" fontFamily="sans-serif" font-size="30" fill= 'hotpink' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="650" y="400" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'yellow' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      <text x="760" y="400" opacity="1" fontFamily="sans-serif" font-size="30" fill= 'red' >
         ರ⁠╭⁠╮⁠ರ 
      </text>
      
   v-for="(d, i) in data"
   :style="{ opacity: 0.1 + d / 15, fill: 'red' }"
        :cx="i * 50 + 50"
        cy="50"
        :r="d * 5"
        width="10"
        height="10"
        
   />
  </svg>
  </div>
</template>
