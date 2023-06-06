import React, { useEffect, useState } from 'react'
import { Hero } from '../../containers/Hero'
// import Features from "../../containers/Features";
import Footer from '../../components/Footer'
import List from '../../components/List'
import axios from 'axios'
import Header from '../../components/Header'

// let lockTest = false
const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      const res = await axios.get(
        `lists${type ? '?type=' + type : ''}${
          genre ? '&genre=' + genre : ''
        }`,
        {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGNiZDdlYmU0NjAyYjE0N2VkNzhhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTg5OTg3NSwiZXhwIjoxNjg2MzMxODc1fQ.NF8qeml-qqjNavQEFiBdABjARmJtfZingCOOmFUMDR4',
          },
        }
      )
      setLists(res.data)
    }
    getRandomLists()
  }, [type, genre])
  
  console.log(lists)
  return (
    <>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      {lists.map((list) => {
        return <List list={list} />
      })}
      <Footer>Footer</Footer>
    </>
  )
}

export default Home
