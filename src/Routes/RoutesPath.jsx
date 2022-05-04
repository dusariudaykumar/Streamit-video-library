import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  ExplorePage,
  HomePage,
  Login,
  Signup,
  SinglePageVideo,
} from "../Pages";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video/:videoId" element={<SinglePageVideo />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { RoutesPath };
