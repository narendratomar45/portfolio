import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this matches your Netlify setup
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
