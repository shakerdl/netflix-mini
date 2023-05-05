import React from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";

const Home = () => {
  return (
    <>
      <Hero>Main Clip</Hero>
      {/* <Features>Features</Features> */}
      <List/>
      <Footer>Footer</Footer>
    </>
  );
};

export default Home;
