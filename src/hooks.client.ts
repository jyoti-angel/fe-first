import type { HandleClientError } from '@sveltejs/kit';
import { hooks } from 'svelte-library';
const { HandleClientError } = hooks;

export const handleError: HandleClientError = HandleClientError;
