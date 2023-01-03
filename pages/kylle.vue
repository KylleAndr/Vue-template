<script setup>
const data = [1, 2, 3, 1, 2, 0, 1];

</script>

<template>
    <div> TEST</div>
  <div v-for="day in range(2 - 1, 9 - 1)" style="margin-top: 20px">
    {{ data[0][day] }}
    <p
      v-for="color in range(2 - 1, 12 - 1)"
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
