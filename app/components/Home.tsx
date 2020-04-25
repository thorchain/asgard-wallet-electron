import React from 'react';
import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to='/counter'>to New Counter</Link>
      <br/>
      <Link to="/start">to New Start</Link>
    </div>
  );
}
