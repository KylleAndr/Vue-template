export default defineNuxtConfig({
  experimental: { reactivityTransform: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  googleFonts: {
    download: false,
    families: {
      Inter: true,
    },
  },
});
