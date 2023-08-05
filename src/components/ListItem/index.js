import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ item }) => {
  debugger
  const [isHovered, setIsHovered] = useState(false);
  const [objectTrailer, setObjectTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchObjectTrailer = async () => {
      try {
        const res = await axios.get("/movies/find/" + item.id, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTE0NDg5MiwiZXhwIjoxNjkxNTc2ODkyfQ.RdxtkDsYlka1tBe67FiGJS6ZqUu0WBZ73HBIyhJPhqw",
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
      return (
        <>
          <video src={objectTrailer} autoPlay loop />
          <div className="itemInfo">
            <div className="icons">
              {/* <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" /> */}
            </div>
            <div className="itemInfoTop">
              <span>{item.year}</span>
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
      {/* <img className={`image ${isHovered ? 'hovered' : ''}`} src={item.image} alt={title} />
      {isHovered && (
        <video className="video" src={video} autoPlay controls>
          Your browser does not support the video tag.
        </video>
      )}   */}
    </div>  
  );
};

export default ListItem;
