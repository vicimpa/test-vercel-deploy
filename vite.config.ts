import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    host: '127.0.0.1',
    port: 3000
  },
  plugins: [
    react({ plugins: [] }),
    paths()
  ],
});
