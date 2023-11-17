import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: "/bonzo-coder",
	plugins: [react()]	
})