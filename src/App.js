import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Features from './containers/Features';
import { Hero } from './containers/Hero';
import styles from './App.module.css';
function App() {
  return (
    <div className={styles.container}>
      <Header>Header</Header>
      <Hero>Main Clip</Hero>
      <Features>Features</Features>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
