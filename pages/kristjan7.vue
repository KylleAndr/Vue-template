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

function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

const toNumber = (num) =>
  Number.isNaN(parseFloat(num)) ? num : parseFloat(num);

const d = computed(() => transpose(colors.value).map((a) => a.map(toNumber)));
</script>

<template>
  <div>
    <!-- <pre>{{ d }}</pre> -->
    <svg width="500" height="750" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="750" fill="#444" />
      <g v-for="(cols, col) in d.slice(0, -1)">
        <!-- <g v-for="(value, col) in cols.slice(0, -1)"> -->
        <!-- <text :x="(col - 1) * 50 + 100" :y="0 * 50 + 100">
          {{ cols[0] }}
        </text> -->
        <g v-for="(value, row) in cols.slice(0, -1)">
          <rect
            v-for="count in range(0, value - 1)"
            :x="(col - 1) * 50 + 80"
            :y="row * 45 + 50 + count * 3"
            width="30"
            height="2"
            :style="{ fill: d[0][row] }"
          />
        </g>
        <!-- </g> -->
      </g>
      <text x="200" y="680" fill="white" opacity="0.4" fontFamily="sans-serif">
        E T K N R L P
      </text>
    </svg>
  </div>
</template>
