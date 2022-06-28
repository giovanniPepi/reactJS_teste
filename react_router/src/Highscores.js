import { Link } from "react-router-dom";

const Highscores = () => {
  return (
    <div>
      <h1> Top players: </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Highscores;
