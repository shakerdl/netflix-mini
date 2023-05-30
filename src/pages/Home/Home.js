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
      try {
        if (!lockTest) {
          lockTest = true;
          const res = await axios.get(
            `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzkwMTAxNCwiZXhwIjoxNjg0MzMzMDE0fQ.yCeB1EioosJkBKmI_HGvYiN5YZ5IN-Cb786KMyxtqDo",
              },
            }
          );
          debugger
          setLists(res.data);
        }

      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {/* <Features>Features</Features> */}
      {lists.map((list) => {
        return <List list={list} />;
      })}
      <Footer>Footer</Footer>
    </>
  );
};

export default Home;
