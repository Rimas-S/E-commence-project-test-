import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Test from "./pages/Test/Test";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Admin from "./pages/Users/Admin/Admin";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import ProductList from "./components/ProductList/ProductList";
import UserList from "./components/UserList/UserList";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App" data-theme="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="productdetail/:id" element={<ProductDetail />} />
        <Route path="test" element={<Test />} />
        <Route path="admin" element={<Admin />}>
        <Route path="productlist" element={<ProductList />} />
          <Route path="productlist/createproduct" element={<CreateProduct />} />
          <Route path="productlist/updateproduct/:id" element={<UpdateProduct />} />          
          <Route path="userlist" element={<UserList />} />
          <Route path="userlist/updateuser/:id" element={<UpdateUser />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
