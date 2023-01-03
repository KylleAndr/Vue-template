<script setup>
const { data } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "vihastamine"
);
const { data: data2 } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "roomustamine"
);
</script>

<template>
  <div>
    <svg width="500" height="750" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="750" fill="#eee" />
      <g v-for="(cols, row) in data">
        <g v-for="(value, col) in cols">
          <circle
            v-if="parseInt(value) > 0"
            :style="{
              opacity: 0.8,
              stroke: 'red',
              fill: 'none',
            }"
            :cx="col * 50 + 100"
            :cy="row * 50 + 100"
            :r="area2radius(parseInt(value)) * 15 + 2"
          />
        </g>
      </g>
      <g v-for="(cols, row) in data2">
        <g v-for="(value, col) in cols">
          <circle
            v-if="parseInt(value) > 0"
            :style="{
              opacity: 0.8,
              stroke: 'green',
              fill: 'none',
            }"
            :cx="col * 50 + 100"
            :cy="row * 50 + 100"
            :r="area2radius(parseInt(value)) * 15"
          />
        </g>
      </g>
      <text x="200" y="680" opacity="0.4" fontFamily="sans-serif">
        E T K N R L P
      </text>
    </svg>
  </div>
</template>
