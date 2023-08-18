import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ListItem.module.css";
import YouTube from "react-youtube";

const ListItem = ({ item }) => {
  debugger
  const [isHovered, setIsHovered] = useState(false);
  const [objectTrailer, setObjectTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // example : https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg
  const TrailerImg = "https://image.tmdb.org/t/p/original"
  useEffect(() => {
    const fetchObjectTrailer = async () => {
      try {
        const res = await axios.get("/movies/find/" + item.id, {
          headers: {
            token: process.env.REACT_APP_API_TOKEN,
          },
        });
        setObjectTrailer(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (objectTrailer === null) {
      fetchObjectTrailer();
    }
  }, [item, objectTrailer]);

  useEffect(() => {
    if (isHovered && !isLoading && objectTrailer) {
      debugger
      const listItem = document.querySelector(`.${styles.listItem}`);
      const img = listItem.querySelector("img");
      const video = listItem.querySelector("video");

      const handleTransitionEnd = () => {
        listItem.classList.add(styles.playing);
        img.style.display = "none";
        video.play();
        listItem.removeEventListener("transitionend", handleTransitionEnd);
      };

      listItem.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        listItem.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [isHovered, isLoading, objectTrailer]);

  const Hover = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (objectTrailer) {
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

      return (
        <>
          <YouTube videoId={objectTrailer.key} opts={opts} />
          <div className="itemInfo">
            <div className="icons">
              {/* <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" /> */}
            </div>
            <div className="itemInfoTop">
              <span>{item.release_date}</span>
            </div>
          </div>
        </>
      );
    }

    return <div>There is no video available</div>;
  };

  return (
    <div
      className={styles.listItem}
      style={{ left: 255 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className={`image ${isHovered ? 'hovered' : ''}`} src={TrailerImg + item.poster_path} alt={item.title} />
      {isHovered && Hover
      }
    </div>
  );
};

export default ListItem;
