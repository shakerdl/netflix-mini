import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [urlTrailer, setUrlTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUrlTrailer = async () => {
      try {
        const res = await axios.get("/movies/find/" + item.id, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjIyNTAyOSwiZXhwIjoxNjg2NjU3MDI5fQ.Y-M2FnUX53xUqyqoFQS8-M9qG4K0Tkjx3uT5gsBBX6c",
          },
        });
        setUrlTrailer(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (urlTrailer === null) {
      fetchUrlTrailer();
    }
  }, [item, urlTrailer]);

  const Hover = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (urlTrailer) {
      return (
        <>
          <video src={urlTrailer} autoPlay={true} loop />
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
      <img src={item.image} alt="" />
      {/* {isHovered && <Hover />} */}
      <Hover />
    </div>
  );
};

export default ListItem;
