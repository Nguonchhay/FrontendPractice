import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi';

interface CardProps {
    movie: any
}

export default function Card({
    movie
} : CardProps) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm-bordered sm:m-2 transition-shadow duration-200 group">
        <Link href={`/movie/${movie.id}`}>
            <Image 
                src={`https://image.tmdb.org/t/p/original${
                    movie.backdrop_path || movie.poster_path 
                }`}
                width={500} height={300}
                className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                style={
                    { maxWidth: "100%", height: "auto", }
                }
                placeholder="blur"
                blurDataURL="/loading.gif"
                alt={movie.title}
            />

            <div className="p-2">
                <p className="line-clamp-2">{movie.overview}</p>
                <h2 className="truncate text-2xl font-bo;d">{movie.title || movie.name}</h2>
                <p className="flex items-center">
                    {
                        movie.release_date || movie.first_air_date
                    }
                    <FiThumbsUp className="h-5 mr-1 ml-3" />
                    { movie.vote_count }
                </p>
            </div>
        </Link>
    </div>
  )
}
