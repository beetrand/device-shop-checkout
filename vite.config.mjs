import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/device-shop-checkout",
  plugins: [tailwindcss()],
});
