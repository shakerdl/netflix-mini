import React, { useEffect, useState } from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";
import axios from "axios";
import Header from "../../components/Header";


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      const res = await axios.get(
        `lists${type ? "?title_type=" + type : ""}${genre ? "&title_type=" + genre : ""}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njc1OTE0OCwiZXhwIjoxNjg3MTkxMTQ4fQ.VRMQ12vfVjEY5sLupZusW4ZAH8RODpFs1aP8Ell3RLc",
          },
        }
      );
      setLists(res.data);
    };

    getRandomLists();
  }, [type, genre]);
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {lists.map((list) => {
        return <List list={list} />;
      })}
      <Footer>Footer</Footer>
    </>
  );
};

export default Home;
