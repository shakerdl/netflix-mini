import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Features.module.css";
import useFetch from "../../hooks/useFetch";
import { trailerUrl } from "../../utils/utils";

const api = {
  youtube: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    url: "https://www.googleapis.com/youtube/v3/search",
  },
  imdb: {
    key: process.env.REACT_APP_NETFLIX_MINI_API_KEY,
    url: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_NETFLIX_MINI_API_KEY}&origin=*`,
    imgs: "https://image.tmdb.org/t/p/w500",
  },
};

const Features = () => {
  const [movies, setMovies] = useState([]);
  const [imdbData, imdbLoading] = useFetch(api.imdb.url);
  useEffect(() => {
    // Fetch trending movies from IMDb API
    if (imdbData) {
      const trendingMovies = imdbData.results.slice(0, 4);
      // Search for trailers for each movie using YouTube API
      const trailerRequests = trendingMovies.map((movie) => {
        return fetch(trailerUrl(movie, api.youtube.key, api.youtube.url))
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
    }
  }, [imdbData]);

  return (
    <div>
      <h1>{imdbLoading ? "loading..." : "Trending Movies"}</h1>
      <ul>
        {movies.map((movie) => (
          <Card movie={movie} imgUrl={`${api.imdb.imgs}${movie.poster_path}`} />
        ))}
      </ul>
    </div>
  );
};

export default Features;
