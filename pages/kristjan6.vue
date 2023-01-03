<script setup>
const { data } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "vihastamine"
);
const { data: data2 } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "roomustamine"
);
const { data: colors } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "värvidkokku"
);
</script>

<template>
  <div>
    <pre>{{ colors[0][0] }}</pre>
    <svg width="500" height="750" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="750" fill="#eee" />
      <g v-for="(cols, row) in colors.slice(0, -1)">
        <g v-for="(value, col) in cols.slice(0, -1)">
          <!-- <text :x="(col - 1) * 50 + 100" :y="row * 50 + 100">
            {{ value }}
          </text> -->
          <circle
            v-if="col > 0 && parseInt(value) > 0"
            :style="{
              opacity: 0.8,
              fill: cols[0],
            }"
            :cx="(col - 1) * 50 + 100"
            :cy="(row - 1) * 50 + 100"
            :r="area2radius(parseInt(value)) * 15 + 2"
          />
        </g>
      </g>
      <text x="200" y="680" opacity="0.4" fontFamily="sans-serif">
        E T K N R L P
      </text>
    </svg>
  </div>
</template>
