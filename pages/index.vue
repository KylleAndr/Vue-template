<script setup>
const routes = useRouter().options.routes;
</script>
<template>
  <div>
    <nuxt-link
      v-for="r in routes.filter((r) => r.name !== 'index')"
      :to="r.path"
      class="block text-4xl font-bold py-2 hover:text-gray-600 transition"
    >
      {{ r.name }}
    </nuxt-link>
  </div>
</template>
