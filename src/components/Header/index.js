import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <div>
          <Link to="/">home Page</Link>
        </div>
        <div>
          <Link to="/series">Series</Link>
        </div>
        <div>
          <Link to="/movies">Movies</Link>
        </div>
        <div>Trending</div>
        <div>My list</div>
        <div>
          <Link to="/search">Search</Link>
        </div>
        <div>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <div className={styles.rightRight}>
        <nav>
          <ul>
            <li>
              <a>Home page</a>
            </li>
            <li>
              <a>Tv shows</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
          </ul>
        </nav>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header