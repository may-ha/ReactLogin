import { Navigate } from "react-router-dom";
export default function AuthLayout(props){
    function isLoggedIn(){
        var user = localStorage.getItem('user');
        if(user) return true;
        return false;
    }
    return(
        <div>
            {!isLoggedIn() && <Navigate to={'/login'}></Navigate>}
            {props.children}
        </div>
    )
}