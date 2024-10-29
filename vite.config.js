import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // specify output file
    
    outDir: './dist/js', // Output folder
    rollupOptions: {
      input: './src/index.js', // Entry point
      output: {
        dir: './dist/js', // Specify the output directory
        entryFileNames: 'bundle.js', // Specify the output file name
        format: 'iife', // Specify the format (e.g., 'iife', 'cjs', 'es')
      },
    },
  },
});
