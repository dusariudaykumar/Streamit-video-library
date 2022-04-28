import { useLocation } from "react-router-dom";
import { NavBar, SideNav } from "./components";
import { RoutesPath } from "./Routes/RoutesPath";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="main-wrapper">
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <NavBar />
        )}
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <SideNav />
        )}
        <RoutesPath />
      </div>
    </div>
  );
}

export default App;
