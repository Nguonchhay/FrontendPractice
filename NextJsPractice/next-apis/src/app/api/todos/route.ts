export async function GET(req: Request) {
    return await Response.json([
        {
            id: 1,
            title: 'Task 1'
        },
        {
            id: 2,
            title: 'Task 2'
        }
    ]);
}

export async function POST(req: Request) {
    return await Response.json([
        {
            id: 1,
            title: 'Task 1'
        }
    ]);
}