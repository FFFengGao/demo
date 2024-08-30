import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Sitemap from 'vite-plugin-sitemap'

const names = [
  'John',
  'Bryce',
  'Addison',
  'Dana',
]
const dynamicRoutes = router.map(name => `/names/${name}`)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({ dynamicRoutes })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
