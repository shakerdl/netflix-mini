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
        `lists${type ? "?title_type=" + type : ""}${type ? "&time_type=" : ""}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTE0NDg5MiwiZXhwIjoxNjkxNTc2ODkyfQ.RdxtkDsYlka1tBe67FiGJS6ZqUu0WBZ73HBIyhJPhqw",
          },
        }
      );
      setLists(res.data);
    };

    getRandomLists();
  }, [type]);
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
