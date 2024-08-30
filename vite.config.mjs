import { fileURLToPath, URL } from "url";
import Sitemap from 'vite-plugin-sitemap';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({ baseURL: 'www.example.com' }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
