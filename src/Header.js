import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
// import TinderCard from 'react-tinder-card';

function Header() {
  return (
    <div className="header">
     <IconButton>
     <PersonIcon fontSize="large" className="header_icon"/>
     </IconButton>
     <img className="header_logo"
     src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
     alt="keep smiling"
     />
   <IconButton>
   <ForumIcon fontSize="large" className="header_icon"/>  
   </IconButton>
   {/* <TinderCard/> */}
    </div>
  );
}

export default Header;
