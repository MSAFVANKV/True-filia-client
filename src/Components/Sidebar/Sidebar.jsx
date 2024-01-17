import React, { useEffect, useState } from 'react'
import '../Sidebar/sidebar.css'

// 
import Logo from '../../assets/Images/FILIALogo.png'
import SidebarButton from './SidebarButton'

// React Icons
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../Spotify';

function Sidebar() {
  const [image, setImage] = useState(Logo);

  useEffect(() => {
    apiClient.get("me").then((response) => {
      if (response.data.images && response.data.images.length > 0) {
        setImage(response.data.images[0].url);
        console.log(response.data.images[0].url);
      }
    });
  }, []);

 
  
  return (
    <div className='sidebar-container'>
        <img src={image} alt="profile" className='profile-img'/>
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
          <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
          <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>

        </div>
        <SidebarButton title="Logout" to="/logout" icon={<FaSignOutAlt/>}/>
    </div>
  )
}

export default Sidebar