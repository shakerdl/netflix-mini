import React, { useEffect, useState } from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";
import axios from "axios";
import Header from "../../components/Header";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTcxNjQwOCwiZXhwIjoxNjg2MTQ4NDA4fQ.i0cjiV8-B4R2_LPFb1UO5EaRB2R72SDsfsZEohH_qIw",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  debugger
  console.log(lists);
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>

      <Footer>Footer</Footer>
    </>
  );
};

// {lists.map((list) => {
//   return <List list={list} />;
// })}

export default Home;
