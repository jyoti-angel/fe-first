import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const json = await request.json();
	Array.isArray(json)
		? json.forEach((log) => console.log(JSON.stringify(log)))
		: console.log(JSON.stringify(json));
	return new Response(undefined, { status: 200 });
}
