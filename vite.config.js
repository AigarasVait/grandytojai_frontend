import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      svgr()
    ],
    ...(mode === "development" && {
      server: {
        proxy: {
          '/api': {
            target: process.env.VITE_API_URL,
            changeOrigin: true,
          },
        },
      }
    })
  });
};