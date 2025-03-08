import React from "react";
import APIService from "../../service/APIService";
import { useNavigate } from "react-router-dom";

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
        <div>
            NavBar
        </div>
    );
}

export default NavBar;