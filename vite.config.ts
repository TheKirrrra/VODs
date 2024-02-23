import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/VODs",

  build: {
    outDir: "build",
    sourcemap: false,
  },

  server: {
    open: true,
  },
});
