import React,{useEffect, useState} from "react";
import { Hero } from "../../containers/Hero";
// import Features from "../../containers/Features";
import Footer from "../../components/Footer";
import List from "../../components/List";
import axios from "axios";

const Home = ({type}) => {
  const [Lists,setLists] = useState([])
  const [genre,setGenre] = useState(null)

  useEffect(()=>{
const getRandomLists = async ()=>{
  try {
     const res = await axios.get(`Lists${type && "?type="+ type}&${genre && "genre="+ genre}` )
  } catch (err) {
    console.log(err);
  }
}
  },[type,genre])
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
