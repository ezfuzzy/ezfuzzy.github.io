import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home
