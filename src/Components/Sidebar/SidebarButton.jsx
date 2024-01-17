import React from "react";
import './SidebarBtn.css'
import { IconContext } from "react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SidebarButton(props) {

    const navigate = useNavigate()
    const location = useLocation()
    const isActive = location.pathname === props.to;

    const btnClass = isActive ? "btn-body active" : "btn-body"

    const handleLogout = () => {
      // Remove token from local storage
      window.localStorage.removeItem("token");
      // navigate("/login"); 
  };
  return (
    <Link to={props.to} className="no-underline">
      <div className={btnClass} onClick={handleLogout}>
      <IconContext.Provider value={{ size: '23px', className: 'btn-icon' }}>
          {props.icon}
          <p className="  font-thin text-[12px] mt-1">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}

export default SidebarButton;
