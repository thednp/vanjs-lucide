import { defineConfig, type Plugin } from "vite";
import path from "path";
import vanjs from "vite-plugin-vanjs";
import tailwind from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwind(), vanjs()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "..", "src"),
      "@": path.resolve(__dirname, "assets"),
    },
  },
});
