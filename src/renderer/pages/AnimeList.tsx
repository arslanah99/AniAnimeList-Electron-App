import { UseGetAllAnime } from 'queries/AnimeQueries';

export function AnimeList() {
  const { data, isLoading } = UseGetAllAnime();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <h1>AnimeList Page</h1>
      <div>
        {data?.data?.map((anime) => {
          return (
            <div>
              <img src={anime.images.jpg.image_url} />
              <h1>{anime.title}</h1>
              <h1>{anime.synopsis}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
