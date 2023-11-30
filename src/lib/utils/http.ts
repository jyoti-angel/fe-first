import { HttpClient } from 'svelte-library';
import { PUBLIC_API_TIMEOUT, PUBLIC_BASE_URL } from '$env/static/public';

const http = new HttpClient({
	baseUrl: PUBLIC_BASE_URL,
	timeout: parseInt(PUBLIC_API_TIMEOUT)
});

export default http;
