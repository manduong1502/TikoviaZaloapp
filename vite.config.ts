import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import zaloMiniApp from "zmp-vite-plugin"; 

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: ".",
    base: "",
    plugins: [
      tsconfigPaths(), 
      react(),
      zaloMiniApp(), 
    ],
    build: {
      outDir: "www",
      emptyOutDir: true,
    },
  });
};
