import React from "react";
import APIService from "../../service/APIService";
import { NavLink, useNavigate } from "react-router-dom";
import "./navBar.scss"
function NavBar() {

    const isAuthenticated = APIService.isAuthenticated;
    const isAdmin = APIService.isAdmin();
    const isUser = APIService.isUser();
    const navigate = useNavigate();

    const handleLogout=()=>{
        const isLogout=window.confirm("Are you sure you want to logout this user?");

        if (isLogout){
            APIService.logout();
            navigate('/home');
        }
    }



    return (
        <nav className="navbar">
            <div className="navbar-head">
                <NavLink to="/home">Ceylon Majesty</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
            </ul>
        </nav>
    );
}

export default NavBar;