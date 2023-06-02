import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const BookStore = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        console.log(isLogin);
        if(!isLogin)
        {
            navigate("/login");
        }
    })
    return(<h1>Book Store</h1>)
}