import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or whatever you use

export default defineConfig({
  plugins: [react()],
  base: "/sriyavedasolarenergies/", // 👈 VERY IMPORTANT
});
