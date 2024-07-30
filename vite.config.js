import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'Project26',  // Replace <REPO_NAME> with your repository name
})
