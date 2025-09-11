import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  // 👇 Important for static hosting (Render, Netlify, Vercel, GitHub Pages)
  base: "./", 
  build: {
    outDir: "dist", // Render expects this
  },
});
