import React from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className={styles.container}>
      <Header>Header</Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
