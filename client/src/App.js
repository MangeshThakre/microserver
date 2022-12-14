import "./App.css";

// componenss
import Navbar from "./components/Navbar.js";
import Home from "./components/home/Home.js";
import User from "./components/user/Users.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-12 h-[100vh]    bg-slate-500      w-full overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
