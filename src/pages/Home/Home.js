import React, { useEffect, useState } from "react"
import { Hero } from "../../containers/Hero"
// import Features from "../../containers/Features";
import Footer from "../../components/Footer"
import List from "../../components/List"
import axios from "axios"
import Header from "../../components/Header"

const Home = ({ type }) => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const getRandomLists = async () => {
      const res = await axios.get(
        `lists${type ? "?title_type=" + type : ""}${type ? "&time_type=" : ""}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjM0NzAwMywiZXhwIjoxNjkyNzc5MDAzfQ.5Px1frz3nW20k8EqoiqE3oqAKdk-QWqIroIVo3Pvy64",
          },
        }
      )
      if (type) {
        setLists(res.data[0])
      } else {
        setLists(res.data)
      }
    }

    getRandomLists()
  }, [type])
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {Object.entries(lists).map(([listName, listItems]) => (
        <>
          {listItems.map((item, index) => (
            <List key={index} listName={listName} list={item} />
          ))}
        </>
      ))}
      <Footer>Footer</Footer>
    </>
  )
}

export default Home
