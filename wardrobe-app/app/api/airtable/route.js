export async function GET() {
	const baseId = process.env.AIRTABLE_BASE_ID;
	const tableName = 'Work'; // <-- Change to your Airtable table name
	const apiKey = process.env.AIRTABLE_API_KEY;

	const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
		},
	});

	const data = await res.json();

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
