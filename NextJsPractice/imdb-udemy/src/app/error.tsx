'use client';

import { useEffect } from "react";
import { FunctionExpression } from "typescript";

interface ErrorProps {
    error: string,
    reset: Function
}

export default function Error({
    error,
    reset
}: ErrorProps) {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h2>Something went wrong!</h2>
            <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
        </div>
    )
}
