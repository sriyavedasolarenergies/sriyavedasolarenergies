import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // keep whatever plugins you already use

export default defineConfig({
  plugins: [react()],
  base: "./", // changed from /sriyavedasolarenergies/ to ./ for relative paths to fix 404 errors on GitHub Pages
});
