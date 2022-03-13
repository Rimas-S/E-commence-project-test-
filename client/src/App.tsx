import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Test from "./pages/Admin/Test";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App" data-theme="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="test" element={<Test />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
