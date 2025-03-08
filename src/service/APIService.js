import axios from "axios" 
 /**AUTHENTICATION CHECKER */

export default class APIService{

    static BASE_URL= "http://localhost:4040";

    static getHeader(){
        const token=localStorage.getItem("token");
    }

    //Auth check
    static logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated(){
        const token=localStorage.getItem('token');
        return !!token;

    }

    static isAdmin() {
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser() {
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

}
