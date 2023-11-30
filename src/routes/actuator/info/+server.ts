import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import packageJSON from '../../../../package.json';
const startTime = new Date();

export const GET = (async () => {
	return json({
		appVersion: packageJSON.version,
		uptime: process.uptime(),
		upSince: startTime,
		localTime: new Date(),
		service: {
			name: 'rne-web'
		}
	});
}) satisfies RequestHandler;
