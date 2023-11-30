import { sequence } from '@sveltejs/kit/hooks';
import { handleDeviecDetector } from 'sveltekit-device-detector';
import { hooks } from 'svelte-library';
import { fontsToPreload, imagesToPreload } from '$lib/constants/preload';
import type { Handle, HandleServerError } from '@sveltejs/kit';

const { handleFetch, handleServerError, handler } = hooks;
const deviceDetector = handleDeviecDetector({});

export { handleFetch };

const createPreloadString = ({ path, as, type }) =>
	`${path};rel="preload";as="${as}";type="${type}";nopush;crossorigin`;

export const preloadHandler = (async ({ event, resolve }) => {
	try {
		const response = await resolve(event);

		const linkHeader = [
			...fontsToPreload.map(createPreloadString),
			...imagesToPreload.map(createPreloadString)
		].join(',');

		if (response.headers.get('Content-Type') === 'text/html') {
			response.headers.delete('link');
			response.headers.set('link', linkHeader);
		}

		return response;
	} catch (e) {
		console.error(e);
	}
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(deviceDetector, handler, preloadHandler, ({ event, resolve }) => {
	return resolve(event, {
		filterSerializedResponseHeaders: () => true
	});
});

export const handleError: HandleServerError = handleServerError;
