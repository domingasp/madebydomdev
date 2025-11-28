import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") !== "application/json") {
		return new Response(null, { status: 400 });
	}

	const body = await request.json();
	const name = body.name;

	return new Response(JSON.stringify({ message: `Message from ${name}` }), {
		status: 200,
	});
};
