import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  ExplorePage,
  HomePage,
  Login,
  PlayListPage,
  Signup,
  SinglePageVideo,
  SinglePlayList,
  WatchLaterPage,
} from "../Pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { LikePage } from "../Pages/LikePage/LikePage";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video/:videoId" element={<SinglePageVideo />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/likes" element={<LikePage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />
        <Route path="/playlist" element={<PlayListPage />} />
        <Route path="/playlist/:playlistId" element={<SinglePlayList />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export { RoutesPath };
