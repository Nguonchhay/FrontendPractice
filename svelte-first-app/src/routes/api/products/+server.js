import { successResponse } from "$lib";
import { products } from "$lib/products";

export function GET() {
    const res = products;
    return successResponse(res, 'Product list');
}

export async function POST(requestEvent) {
    const { request } = requestEvent;
    const { title, unitPrice, imageUrl } = await request.json();
    const newProduct = {
        title,
        unitPrice,
        imageUrl
    };
    products.push(newProduct);
    return successResponse(newProduct, 'Product is saved');
}