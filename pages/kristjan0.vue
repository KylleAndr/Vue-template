<script setup>
const { data } = await useSheet(
  "1dh-71mDVPeiB7mvQn-EUal-4p1swJHE3d5FqwoPVwTQ",
  "kristjan-loodusroom"
);

const path = polygonpath(
  data.value[1].slice(1).map((d, x) => [x * 10, 500 - d * 10])
);
</script>

<template>
  <div>
    <svg
      width="500"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
      class="bg-gray-100"
    >
      <path :d="path" stroke="black" fill="none" />
    </svg>

    <pre>{{ path }}</pre>
    <pre>{{ data[1].slice(1) }}</pre>
  </div>
</template>
