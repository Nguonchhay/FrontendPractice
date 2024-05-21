import Movies from '@/components/Movies';

const API_TOKEN = process.env.API_TOKEN;

export default async function Home({ searchParams}: any) {

  const genre = searchParams.genre || 'fetchTrending';
  const headers = { 'Authorization': `Bearer ${API_TOKEN}` };
  const res = await fetch(`https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/day"
    }?language=en-US&page=1`,
    { headers, next: { revalidate: 216000} });

  if (!res.ok) {
    throw new Error('Cannot fetch data');
  }
  const data = await res.json();

  return (
    <div>
      <Movies data={data.results} />
    </div>
  )
}
