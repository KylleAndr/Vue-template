<script setup>
const { data } = await useSheet(
  "1rq0SknbfsfC3fcxt_vMMX_-KQX8hNmAGF98OB7r3PSU",
  "värvidkokku"
);
</script>

<template>
  <div v-for="day in range(2 - 1, 9 - 1)" style="margin-top: 20px">
    {{ data[0][day] }}
    <p
      v-for="color in range(2 - 1, 13 - 1)"
      :style="{
        width: data[color][day] * 50 + 'px',
        height: '20px',
        background: data[color][0],
        color: 'darkgray',
        padding: '5px 10px 5px 10px',
        borderRadius: '1000000px',
        marginBottom: '5px',
        opacity: data[color][day],
      }"
    ></p>
  </div>
</template>
