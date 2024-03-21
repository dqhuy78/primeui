export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src",

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
  ],

  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },

  css: ["primevue/resources/themes/tailwind-light/theme.css", 'primeicons/primeicons.css']
});
