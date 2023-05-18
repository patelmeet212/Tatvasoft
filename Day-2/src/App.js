import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Apple from "./Apple";
import Applet from "./Applet"; // Add the import statement for Applet.js

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apple">Apple</Link>
            </li>
            <li>
              <Link to="/applet">Applet</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/*" element={<Applet />} /> {/* Add this route for the 404 page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;