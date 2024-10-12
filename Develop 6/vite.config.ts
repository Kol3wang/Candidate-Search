import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file from a custom path
dotenv.config({ path: path.resolve('environment/.env') });
// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
});
