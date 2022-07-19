import { defineConfig  } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import fs from 'fs';;

/** @type {import('vite').UserConfig} */


export default defineConfig({
	// resolve: { alias: { '@': '/src' } },
	plugins: [sveltekit()],
	https: {
		key: fs.readFileSync('certificate.crt'),
		cert: fs.readFileSync('certificate.key')
	}
})
