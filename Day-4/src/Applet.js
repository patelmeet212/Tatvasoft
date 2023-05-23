import React from "react";
import {  useNavigate, useLocation } from "react-router-dom";

const Applet = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onHomePageButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>404 Error: Page Not Found</h2>
      <p>The requested page could not be found.</p>
      {location.pathname !== "/" && (
        <button onClick={onHomePageButtonClick}>Go to Home page</button>
      )}
    </div>
  );
};

export default Applet; 

