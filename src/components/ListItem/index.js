import axios from 'axios';
import React, { useState, useEffect } from 'react'


const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item.id, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDAxMjQxMywiZXhwIjoxNjg0NDQ0NDEzfQ.bkaRGU8q2BB0DqU7qp0ozhZADahZGjZOo45PMM6NfAA",
          },
        });
        debugger
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.image}
        alt=""
      />
      {isHovered && (
        <>
          {movie.linkEmbed && <video src={movie.linkEmbed} autoPlay={true} loop />}
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
  )
}

export default ListItem