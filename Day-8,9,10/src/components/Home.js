import { useEffect } from "react";
import { Footer } from "./footers/Footer";
import { useNavigate } from "react-router-dom";
export const Home = () =>{
  const navigate = useNavigate();
    useEffect(() => {
        navigate("/login");
    });
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    ) 
}