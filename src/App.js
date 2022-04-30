import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar, SideNav } from "./components";
import { RoutesPath } from "./Routes/RoutesPath";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ToastContainer
        theme="theme"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        toastClassName="dark-toast"
      />
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
