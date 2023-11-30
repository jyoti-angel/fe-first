import { sessionStorage } from 'svelte-library';
import { constants } from 'svelte-library';
import type { SparkData } from 'svelte-library/dist/types/ISparkStore';
import logger from '$lib/utils/logger';

const { SESSION_KEYS } = constants;

export function persistedStore(data: SparkData): SparkData {
	if (Object.keys(data).length === 0) {
		try {
			const rawStore = sessionStorage.get(SESSION_KEYS.SPRK_STORE);
			if (rawStore) {
				return JSON.parse(rawStore);
			}
			return data;
		} catch (err) {
			logger.error('error parsing store from session storge');
			return data;
		}
	} else {
		sessionStorage.set(SESSION_KEYS.SPRK_STORE, JSON.stringify(data));
		return data;
	}
}
