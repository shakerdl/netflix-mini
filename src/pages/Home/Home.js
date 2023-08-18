import React, { useEffect, useState } from "react"
import { Hero } from "../../containers/Hero"
// import Features from "../../containers/Features";
import Footer from "../../components/Footer"
import List from "../../components/List"
import axios from "axios"
import Header from "../../components/Header"

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      const res = await axios.get(
        `lists${type ? "?title_type=" + type : ""}${type ? "&time_type=" : ""}`,
        {
          headers: {
            token: process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      if (type) {
        setLists(res.data[0]);
      } else {
        setLists(res.data);
      }
    };

    getRandomLists();
  }, [type]);

  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {Object.entries(lists).map(([listName, listItems]) => (
        <List listName={listName} list={listItems} />
      ))}
      <Footer>Footer</Footer>
    </>
  );
};

export default Home
