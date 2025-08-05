import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Remove Replit-specific plugins for GitHub Pages deployment
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // Changed from import.meta.dirname
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"), // Changed from import.meta.dirname
  base: '/asadnakade-portfolio-ts/', // Your actual repository name
  build: {
    outDir: path.resolve(__dirname, "dist"), // Simplified output directory
    emptyOutDir: true,
    assetsDir: 'assets'
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
