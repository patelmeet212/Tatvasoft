import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onApplePageButtonClick = () => {
    navigate("/apple");
  };

  return (
    <div>
      <h2>Home Page 🏠</h2>
      {/* <button onClick={onApplePageButtonClick}>Go to Apple page</button> */}
    </div>
  );
};

export default HomePage;