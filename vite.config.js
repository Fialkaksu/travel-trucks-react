import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@redux": "/src/redux",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
    },
  },
});
