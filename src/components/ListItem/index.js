import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ListItem.module.css";

let lockTest = false;
const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    //use index of the list to avoid call Trailer for ComingSoon
    if (index === 0) return;
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item.id, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTcxNjQwOCwiZXhwIjoxNjg2MTQ4NDA4fQ.i0cjiV8-B4R2_LPFb1UO5EaRB2R72SDsfsZEohH_qIw",
          },
        });
        debugger;
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (!lockTest) {
      debugger
      lockTest = true;
      getMovie();
    }
  }, [item]);

  return (
    <div
      className={styles.listItem}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt="" />
      {isHovered && (
        <>
          {index === 0 ?
            <div>UpComing</div>
            :
            <video src={movie.linkEmbed} autoPlay={true} loop />
          }
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
      )}
    </div>
  );
};

export default ListItem;
