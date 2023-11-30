import adapter from '@sveltejs/adapter-node';

import { vitePreprocess } from '@sveltejs/kit/vite';
import { config as envConfig } from 'dotenv';
envConfig(); // just to initialize dotenv & get .env values in process.env

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: `${process.env.PUBLIC_PATH}`
		},
		alias: {
			$root: '.'
		}
	}
};

export default config;
