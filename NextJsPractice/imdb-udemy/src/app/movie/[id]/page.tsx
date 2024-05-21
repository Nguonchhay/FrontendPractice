import Image from 'next/image';


const API_TOKEN = process.env.API_TOKEN;

export default async function MoviePage({ params } : any) {

    const selectedId = params.id;
    const headers = { 'Authorization': `Bearer ${API_TOKEN}` };
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedId}?language=en-US&page=1`,
        { headers }
    );
    const movie = await res.json();

    return (
        <div className="">
            <div className="p-4 md:mt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x">
                <Image 
                    src={`https://image.tmdb.org/t/p/original${
                        movie.backdrop_path || movie.poster_path 
                    }`}
                    width={500} height={300}
                    className="rounded-lg"
                    style={
                        { maxWidth: "100%", height: "100%", }
                    }
                    placeholder="blur"
                    blurDataURL="/loading.gif"
                    alt={movie.title}
                />

                <div className="ml-5">
                    <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name }</h2>
                    <p>
                        <span className=">font-semibold mr-1">Overview: </span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Date release:</span>
                        { movie.release_date || movie.first_air_date }
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Rating:</span>
                        { movie.vote_count }
                    </p>
                </div>
            </div>
        </div>
    )
}
