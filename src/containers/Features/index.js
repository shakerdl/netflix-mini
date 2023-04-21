import React, { useState, useEffect } from "react";
// import styles from './Features.module.css'

const Features = () => {
  const [movies, setMovies] = useState([]);
  const imagesUrls = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    const imdbKey = process.env.REACT_APP_NETFLIX_MINI_API_KEY;
    const youtubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    // Fetch trending movies from IMDb API
    const imdbUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${imdbKey}&origin=*`;
    fetch(imdbUrl)
      .then((imdbResponse) => imdbResponse.json())
      .then((imdbData) => {
        const trendingMovies = imdbData.results.slice(0,4);
        console.log(trendingMovies);
        // Search for trailers for each movie using YouTube API
        const youtubeUrl = "https://www.googleapis.com/youtube/v3/search";
        const trailerRequests = trendingMovies.map((movie) => {
          const query = `${movie.title} trailer`;
          // using new URLSearchParams for easy connect queries togethers
          const params = new URLSearchParams({
            part: "snippet",
            type: "video",
            q: query,
            key: youtubeKey,
          });
          return fetch(`${youtubeUrl}?${params}`)
            .then((youtubeResponse) => youtubeResponse.json())
            .then((youtubeData) => {
              const videos = youtubeData.items;
              if (videos.length > 0) {
                movie.trailerUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
              }
              return movie;
            });
        });

        // Wait for all trailer requests to finish and set the state
        Promise.all(trailerRequests).then((moviesWithTrailers) => {
          setMovies(moviesWithTrailers);
        });
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {
        movies.map((movie) => (
          <li key={movie.id}>
            <img src={`${imagesUrls}${movie.poster_path}`} alt={movie.title} />
            <button onClick={() => window.open(movie.trailerUrl)}>
              Play Trailer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
