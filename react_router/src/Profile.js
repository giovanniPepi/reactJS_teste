import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from Profile</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/highscores">Highscores</Link>
      </nav>
    </div>
  );
};

export default Profile;
