import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./Features.module.css";
import useFetch from "../../hooks/useFetch";
import { combaineUrlParams } from "../../utils/utils";

// const api = {
//   youtube: {
//     key: process.env.REACT_APP_YOUTUBE_API_KEY,
//     url: "https://www.googleapis.com/youtube/v3/search",
//   },
//   imdb: {
//     key: process.env.REACT_APP_NETFLIX_MINI_API_KEY,
//     url: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_NETFLIX_MINI_API_KEY}&origin=*`,
//     imgs: "https://image.tmdb.org/t/p/w500",
//   },
// };

const List = ({type}) => {
  const [movies, setMovies] = useState([]);
  const [imdbData, imdbLoading] = useFetch(api.imdb.url);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // Fetch trending movies from IMDb API
    if (imdbData) {
      const trendingMovies = imdbData.results.slice(0, 4);
      setMovies(trendingMovies);
    }
    
  }, [imdbData]);

  useEffect(() => {
    // Search for trailers for each movie using YouTube API
    if (movies.length > 0) {
      
      const updatedMovies = movies.map((movie) => {
        setTrailerUrl(combaineUrlParams(movies[0], api.youtube.key, api.youtube.url));
        const videos = trailerUrl.items;
        
        if (videos.length > 0) {
          movie.trailerUrl = `https://www.youtube.com/watch?v=${videos[0].id.videoId}`;
        }
        return movie;
      });
      setMovies(updatedMovies);
    }
  }, []);

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

export default List;
