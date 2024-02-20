import "./App.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LogSign from "./pages/LogSign";
import Reservation from "./pages/Reservation";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/logsign" element={<LogSign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
