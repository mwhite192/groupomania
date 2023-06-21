// imports the React library and the MenuLink.scss file
import React from 'react';
import './MenuLink.scss';

// creates the MenuLink component
export const MenuLink = ({icon, text}) => {
  // returns the MenuLink component
  return (
    <div className='menuLink'>
        {icon}
        <span className='menuLinkText'>{text}</span>
        <span className='menuLinkTextName'>{text === 'Logout'}</span>
    </div>
  )
}

export default MenuLink;
