import { writable } from 'svelte/store';

export const dummyStore = writable({
	test: ['a']
});
