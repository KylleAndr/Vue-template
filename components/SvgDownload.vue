<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const svgRef = ref(null);
let download = () => {};
onMounted(() => {
  download = useSvgDownload(svgRef, "dataviz");
});
</script>

<template>
  <svg ref="svgRef" xmlns="http://www.w3.org/2000/svg" v-bind="$attrs">
    <slot />
  </svg>
  <button @click="download" class="mt-4 text-gray-500">Download</button>
</template>
