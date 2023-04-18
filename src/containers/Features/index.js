import React, { useState, useEffect } from 'react'
// import styles from './Features.module.css'
require('dotenv').config()

const Features = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const imdbKey = process.env.NETFLIX_MINI_API_KEY;
        const youtubeKey = process.env.YOUTUBE_API_KEY;

        // Fetch trending movies from IMDb API
        const imdbUrl =
            `https://api.themoviedb.org/3/trending/all/week?api_key=${imdbKey}`
        fetch(imdbUrl)
            .then((imdbResponse) => imdbResponse.json())
            .then((imdbData) => {
                const trendingMovies = imdbData.results;
                console.log(trendingMovies);
                debugger
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
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img src={movie.image} alt={movie.title} />
                        <button onClick={() => window.open(movie.trailerUrl)}>Play Trailer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Features