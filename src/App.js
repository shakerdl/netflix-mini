import React from "react";
import styles from "./App.module.css";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./components/Search";
import Favorites from "./components/List";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";

function App() {
  const user = true;

  const validUser = (currentUser, type) => {
    if (currentUser) {
      return <Home />;
    }
    if (type === "register") {
      return <Register />;
    }
    if (type === "login") {
      return <Login />;
    }
    return <Register />;
  };

  return (
    <div className={styles.container}>
      <Routes>
        <Route exact path="/" element={validUser(user)}></Route>
        <Route path="/register" element={validUser(!user, "register")}></Route>
        <Route path="/login" element={validUser(!user, "login")}></Route>
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />}></Route>
            <Route path="/series" element={<Home type="series" />}></Route>
            {/* <Route path="/watch" element={<Watch />}></Route>  //it's for the video to open in full screen */}
            <Route path="/search" element={<Search />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
