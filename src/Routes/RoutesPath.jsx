import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Signup, SinglePageVideo } from "../Pages";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video/:videoId" element={<SinglePageVideo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { RoutesPath };
