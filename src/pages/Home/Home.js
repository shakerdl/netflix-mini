import React, { useEffect, useState } from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";
import axios from "axios";
import Header from "../../components/Header";

const Home = ({ type }) => {
  const [Lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      debugger
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzY2MDEwMywiZXhwIjoxNjg0MDkyMTAzfQ.Ny1a4dr4vcS4sjrU0wh8bwJWbqvf0mLpQkcmu-jIVFo"
          }
        })
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {/* <Features>Features</Features> */}
      <List />
      <Footer>Footer</Footer>
    </>
  );
};

export default Home;
