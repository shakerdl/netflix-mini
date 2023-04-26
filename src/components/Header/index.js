import React from 'react'
import logo from '../../assets/logo.png';
import styles from './Header.module.css';
import { Route, Routes } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftHeader}>
                {/* TODO:
                1.search box
                2.profile name */}

                <div >Profile</div>
                <div>Search</div>
                <div>Favorites</div>
            </div>
            <div className={styles.rightRight}>
                <nav>
                    <ul>
                        <li><a>Home page</a></li>
                        <li><a>Tv shows</a></li>
                        <li><a>Movies</a></li>
                    </ul>
                </nav>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <Routes>
                <Route ></Route>
            </Routes>
        </header>
    )
}

export default Header