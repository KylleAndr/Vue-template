<script setup>
const { data } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "vihastamine"
);

const rows = [
  [0, 0, 1, 2, 1, 3, 3],
  [1, 0, 1, 2, 2, 3, 1],
  [3, 0, 1, 2, 2, 2, 3],
  [0, 0, 1, 2, 1, 3, 6],
];
</script>

<template>
  <div>
    <svg width="500" height="750" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="750" fill="#eee" />
      <g v-for="(cols, row) in data">
        <circle
          v-for="(value, col) in cols"
          :style="{ opacity: 0.2 + parseInt(value) / 15, fill: 'purple' }"
          :cx="col * 50 + 100"
          :cy="row * 50 + 100"
          :r="parseInt(value) * 10"
        />
        <circle
          v-for="(value, col) in cols"
          :cx="col * 50 + 100"
          :cy="row * 50 + 100"
          r="1"
          fill="fill"
          opacity="0.3"
        />
      </g>
      <text x="200" y="680" opacity="0.4" fontFamily="sans-serif">
        E T K N R L P
      </text>
    </svg>
  </div>
</template>
