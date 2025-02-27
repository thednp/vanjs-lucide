import { defineConfig } from "vite";
import path from "path";
import vanjs from "vite-plugin-vanjs";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwind(), vanjs()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "..", "src"),
      "@": path.resolve(__dirname, "assets"),
    },
  },
});
