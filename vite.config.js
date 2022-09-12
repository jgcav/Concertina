import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'sveltekit-autoimport';

const config = {
	plugins: [
		autoImport({
			components: ['./src/components']
		}),
		sveltekit()
	]
};

export default config;
