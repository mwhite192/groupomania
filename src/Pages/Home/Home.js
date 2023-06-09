// import the React library and the Home.scss file
import React from 'react';
import './Home.scss';
// import the Navbar, Sidebar, and Feed components
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';


// creates the Home page
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
