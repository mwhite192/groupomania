import React from 'react';
import './Home.scss';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
