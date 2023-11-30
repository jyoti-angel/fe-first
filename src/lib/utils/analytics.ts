import {
	PUBLIC_ANALYTICS_URL_ANDROID,
	PUBLIC_ANALYTICS_URL,
	PUBLIC_ANALYTICS_URL_IOS,
	PUBLIC_PIPETOPIC,
	PUBLIC_PIPETOPIC_ANDROID,
	PUBLIC_PIPETOPIC_IOS
} from '$env/static/public';

import type { DevicePayload } from 'sveltekit-device-detector';
import type { Environment } from '$lib/types';

export function getAnalyticsUrl(isAndroid: boolean, env: Environment) {
	if (env !== 'prod') {
		return PUBLIC_ANALYTICS_URL;
	}

	if (isAndroid) {
		return PUBLIC_ANALYTICS_URL_ANDROID;
	} else {
		return PUBLIC_ANALYTICS_URL_IOS;
	}
}

export function getPipeTopic(isAndroid: boolean, env: Environment) {
	if (env !== 'prod') {
		return PUBLIC_PIPETOPIC;
	}

	if (isAndroid) {
		return PUBLIC_PIPETOPIC_ANDROID;
	} else {
		return PUBLIC_PIPETOPIC_IOS;
	}
}

export function getPlatform(dp: DevicePayload): string {
	if (dp.isMobile) return 'mweb';
	if (dp.isTablet) return 'tweb';
	return 'web';
}
