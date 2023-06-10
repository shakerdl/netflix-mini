import React, { useEffect, useState } from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";
import axios from "axios";
import Header from "../../components/Header";

let lockTest = false;
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      debugger
      const res = await axios.get(
        `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjIyNTAyOSwiZXhwIjoxNjg2NjU3MDI5fQ.Y-M2FnUX53xUqyqoFQS8-M9qG4K0Tkjx3uT5gsBBX6c",
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
