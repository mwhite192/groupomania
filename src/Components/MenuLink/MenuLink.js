import React from 'react';
import './MenuLink.scss';

export const MenuLink = ({icon, text}) => {
  return (
    <div className='menuLink'>
        {icon}
        <span className='menuLinkText'>{text}</span>
        <span className='menuLinkTextName'>{text === 'Logout'}</span>
    </div>
  )
}

export default MenuLink
