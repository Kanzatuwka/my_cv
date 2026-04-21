import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

// vite.config.ts
export default defineConfig(({mode}) => {
  return {
    base: 'my_cv/', // Наприклад: '/portfolio/'
    // ... решта налаштувань
  }
}
