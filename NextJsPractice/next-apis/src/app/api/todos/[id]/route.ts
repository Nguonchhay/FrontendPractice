import type { NextApiRequest, NextApiResponse } from 'next';

export async function PUT(req: Request, { params }: any) {
    const { id }= params;

    return Response.json([
        {
            id,
            title: 'Task from PUT'
        }
    ]);
}

export async function DELETE(req: Request, { params }: any) {
    const { id }= params;
    
    return Response.json([
        {
            id,
            title: 'Task from DELETE'
        }
    ]);
}