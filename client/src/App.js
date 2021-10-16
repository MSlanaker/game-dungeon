<<<<<<< Updated upstream
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";

=======
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <TopBar />
      <Home />
      </>
  );
}

export default App;