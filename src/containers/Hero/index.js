import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import ModalVideo from "../../components/ModalVideo";
import { useState } from "react";
import { getRandomInt } from "../../utils/utils";


// const movies = [
//     {
//         id: 458156,
//         name: "john-wick-chapter-3",
//         youtube: "pU8-7BX9uxs",
//     },
//     {
//         id: 320288,
//         name: "dark-phoenix",
//         youtube: "azvR__GRQic",
//     },
//     {
//         id: 373571,
//         name: "godzilla-king-of-the-monsters",
//         youtube: "KDnKuFtdc7A",
//     },
// ];

export const Hero = () => {
    // const API_URL = "https://api.themoviedb.org/3/";
    // const [movieDetails, setMovieDetails] = useState("");
    // const [movieUrl, setMovieUrl] = useState("");
    // // todo: add random url that match the video from
    // useEffect(() => {
    //     fetch(
    //         `${API_URL}movie/${movies[getRandomInt(3)].id}?api_key=${process.env.REACT_APP_NETFLIX_MINI_API_KEY}`
    //     )
    //         .then((response) => response.json())
    //         .then((response) => setMovieDetails(response))
    //         .catch((err) => console.error(err));
    // }, []);
    // if (movieDetails?.title && movieUrl.length === 0) {
    //     switch (movieDetails.title) {
    //         case `John Wick: Chapter 3 - Parabellum`:
    //             setMovieUrl(movies[0].youtube);
    //             break;
    //         case "Dark Phoenix":
    //             setMovieUrl(movies[1].youtube);
    //             break;
    //         case "Godzilla: King of the Monsters":
    //             setMovieUrl(movies[2].youtube);
    //             break;

    //         default:
    //             break;
    //     }
    // }

    // if (movieUrl.length === 0) {
    //     return <h1>loading...</h1>;
    // }

    return (
        <section className={styles.hero}>
            {/* <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${movieUrl}?autoplay=1&mute=1&fullscreen=1`}
                title={`${movieDetails.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>
            <ModalVideo movieDetails={movieDetails} /> */}
        </section>
    );
};
