import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Highscores from "./Highscores";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/highscores" element={<Highscores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
