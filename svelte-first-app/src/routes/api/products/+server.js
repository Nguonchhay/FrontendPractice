import { successResponse } from "$lib";
import { products } from "$lib/products";

export function GET() {
    const res = products;
    return successResponse(res, 'Product list');
}