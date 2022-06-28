import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <nav>
        <Link to="/highscores">Highscores</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};
export default App;
