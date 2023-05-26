import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './Home.scss';
import PostFeed from '../../Components/PostFeed/PostFeed';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <PostFeed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
