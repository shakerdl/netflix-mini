import MovieService from '../../services/movies/MovieService';
import React, { useState, useEffect } from "react";
import styles from "./ListItem.module.css";
import YouTube from 'react-youtube'

const ListItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [objectTrailer, setObjectTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [retryCount, setRetryCount] = useState(0); // Initialize retry count
  const TrailerImg = "https://image.tmdb.org/t/p/original";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await MovieService.getMovie(item.id);
        setObjectTrailer(res);

        if (res === undefined) {
          if (retryCount < 3) { // Retry up to 3 times
            console.log("Retrying...");
            setRetryCount(retryCount + 1); // Increment retry count
            fetchData(); // Retry the request
          } else {
            setIsLoading(false); // Stop retrying and set loading to false
          }
        }
      } catch (err) {
        console.log("Error:", err);

      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [item, retryCount]); // Include retryCount in dependencies

  useEffect(() => {
    if (isHovered && !isLoading && objectTrailer) {
      setIsPlaying(true);
    }
  }, [isHovered, isLoading, objectTrailer]);

  return (
    <div
      className={`${styles.listItem} ${isPlaying ? styles.playing : ""}`}
      style={{ left: 255 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`image ${isHovered ? "hovered" : ""}`}
        src={`${TrailerImg}${item.poster_path}`}
        alt={item.title}
        style={{ display: isPlaying ? "none" : "block" }}
      />
      {isHovered && objectTrailer && (
        <YouTube videoId={objectTrailer.key} opts={opts} />
      )}
    </div>
  );
};

export default ListItem;
