import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import { comlink } from 'vite-plugin-comlink';

const OPTIONAL = {
	development: {
		optimizeDeps: {
			exclude: ['svelte-library']
		}
	},
	production: {}
} as const;

export default function defineConfig({ mode }: { mode: 'development' | 'production' }) {
	return {
		plugins: [comlink(), sveltekit(), mkcert()],
		worker: {
			plugins: [comlink(), sveltekit()],
			format: 'es'
		},
		server: {
			https: true
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		},
		...(OPTIONAL[mode] || {})
	};
}
