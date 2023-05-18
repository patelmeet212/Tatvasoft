import { Link, useNavigate, useLocation } from "react-router-dom";

const Apple = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onHomePageButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Apple Page 🍎</h2>
      {location.pathname !== "/" && (
        <button onClick={onHomePageButtonClick}>Go to Home page</button>
      )}
    </div>
  );
};

export default Apple;