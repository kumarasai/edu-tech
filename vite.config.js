import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Standard Vite config for a React + Tailwind project
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // lets us write `@/components/Foo` instead of relative paths
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
