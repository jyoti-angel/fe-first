import { browser } from '$app/environment';
import http from '$lib/utils/http.js';
import { getTestData } from '../lib/apis';

import type { PageLoadEvent } from './$types';
export async function load({ fetch }: PageLoadEvent) {
	http.setFetcher(fetch); // important to call this on first line of each +page.ts load function

	return {
		data: browser ? getTestData() : await getTestData()
	};
}
