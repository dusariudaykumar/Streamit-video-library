import { Route, Routes } from "react-router-dom";
import { HomePage, Login, Signup } from "../Pages";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { RoutesPath };
