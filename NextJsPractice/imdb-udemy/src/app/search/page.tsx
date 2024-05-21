'use client';

import { useSearchParams } from 'next/navigation'
import Movies from "@/components/Movies";


const API_TOKEN = process.env.API_TOKEN;

export default async function SearchPage() {
    const searchParams = useSearchParams();
    const search = searchParams.get('query');

    const headers = { 'Authorization': `Bearer ${API_TOKEN}` };
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${search}`,
        { headers }
    );

    if (!res.ok) {
        //throw new Error('Cannot fetch data');
        console.log('Cannot fetch data');
    }
    const data = await res.json();
    const movies = data.results;

    return (
        <div>
            {
                movies && movies.length === 0 && (
                    <h1 className="text-center pt-6">No record found.</h1>
                ) 
            }
            { movies && <Movies data={movies} /> }
        </div>
    )
}
