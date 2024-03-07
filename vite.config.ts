import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src"),
    }
  },
  // publicPath 為 project-name，根目錄地址為上傳的網域
  base: '/PersonalWeb/'
})
