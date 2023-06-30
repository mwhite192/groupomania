// imports the React library and the Home.scss file
import React from 'react';
import './Home.scss';
// imports the store and getAuthenticated functions
import { store } from '../../App/store';
import { getAuthenticated } from '../../App/Features/User/userSlice';
// imports the useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useEffect hook
import { useEffect } from 'react';
// imports the Navbar, Sidebar, and Feed components
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';



// creates the Home page
export const Home = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates an authenticated variable and sets it to the getAuthenticated function
  const authenticated = getAuthenticated(store.getState());
  // checks if the user is authenticated
  useEffect (() => {
    // if the user is not authenticated, navigate to the login page
    if (!authenticated) {
      navigate('/');
      // if the user is authenticated, navigate to the home page
  }}, [authenticated]);
  

  // returns the Home page
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
