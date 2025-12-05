import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
    cssMinify: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
          icons: ["react-icons"],
        },
        // Asset naming for cache busting
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    target: "es2020",
    chunkSizeWarningLimit: 500,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
});
