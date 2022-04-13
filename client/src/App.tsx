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
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { AdminDashboard } from "./components/AdminDashboard/AdminDashboard";
import { MyOrders } from "./components/MyOrders/MyOrders";
import { MyDiscounts } from "./components/MyDiscounts/MyDiscounts";
import { MyUserInfo } from "./components/MyUserInfo/MyUserInfo";
import { Help } from "./components/Help/Help";
import { RequireAuth } from "./services/RequireAuth";

function App() {
  return (
    <div className="App" data-theme="">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="test" element={<Test />} />
          <Route path="basket" element={<BasketPage />} />
          <Route element={<RequireAuth role={["admin", "user"]} />}>
            <Route path="myaccount" element={<MyAccount />}>
              <Route path="" element={<MyOrders />} />
              <Route path="mydiscount" element={<MyDiscounts />} />
              <Route path="myuserinfo" element={<MyUserInfo />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Route>

          <Route element={<RequireAuth role={["admin"]} />}>
            <Route path="admin" element={<Admin />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="productlist" element={<ProductList />} />
              <Route
                path="productlist/createproduct"
                element={<CreateProduct />}
              />
              <Route
                path="productlist/updateproduct/:id"
                element={<UpdateProduct />}
              />
              <Route path="userlist" element={<UserList />} />
              <Route path="userlist/updateuser/:id" element={<UpdateUser />} />
            </Route>
          </Route>

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
