<script setup>
import { random } from "~~/composables/math";

const { data: iris } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "iris"
);

const { data: inna } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "inna"
);

const { data: elina } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "elina"
);

const { data: terje } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "terje"
);

const { data: ulvi } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "ulvi"
);

const { data: sille } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "sille"
);

const nudge = 13;

const datas = computed(() => [
  iris.value,
  inna.value,
  elina.value,
  terje.value,
  ulvi.value,
  sille.value,
]);
</script>

<template>
  <div>
    <svg width="500" height="750" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="750" fill="#eee" />

      <g v-for="(d, y) in datas" :transform="translate(0, y * 100)">
        <g v-for="(cols, row) in d">
          <g v-for="(value, col) in cols">
            <circle
              v-if="cols[7] !== 'mixed'"
              :style="{
                opacity: cols[7] === 'black' ? 0.8 : 1,
                fill: cols[7] === 'mixed' ? 'none' : cols[7],
                stroke: cols[7] === 'mixed' ? 'black' : 'none',
                strokeWidth: cols[7] === 'mixed' ? 2 : 0,
              }"
              :cx="col * 60 + 65 + random(-nudge, nudge)"
              :cy="0 * 3 + 100 + random(-nudge, nudge)"
              :r="area2radius(parseInt(value)) * 12"
            />
            <circle
              v-if="cols[7] === 'mixed'"
              v-for="count in Math.floor(
                (area2radius(parseInt(value)) * 12) / 2
              )"
              :r="count * 2"
              stroke="black"
              fill="none"
              :cx="col * 60 + 65"
              :cy="0 * 3 + 100"
            />
          </g>
        </g>
      </g>

      <text x="200" y="680" opacity="0.4" fontFamily="sans-serif">
        E T K N R L P
      </text>
    </svg>
  </div>
</template>
