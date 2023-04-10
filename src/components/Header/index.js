import React from 'react'
import logo from '../../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftHeader}>
                {/* TODO:
                1.search box
                2.profile name */}

                <div>Profile</div>
                <div>Search</div>
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
        </header>
    )
}

export default Header