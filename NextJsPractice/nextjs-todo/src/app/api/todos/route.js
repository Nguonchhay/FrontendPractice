export async function GET() {
  const res = await fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos');

  const data = await res.json();
  return Response.json(data);
}

export async function POST(request) {
  const storeData = await request.json();
  const res = await fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(storeData) 
  });

  const data = await res.json();
  return Response.json(data);
}