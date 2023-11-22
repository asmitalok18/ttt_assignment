import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  // other configurations...
  resolve: {
    alias: {
      // map the 'json' module to the appropriate loader
      'json': 'jsonc-loader'
    },
  },
};

