// place files you want to import through the `$lib` alias in this folder.

import { json } from "@sveltejs/kit";

export const successResponse = (data: Array<object> | object, message: string = '', statusCode: number = 200) => {
    return json({
        statusCode,
        message,
        data
    });
}