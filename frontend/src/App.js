import "./App.css";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import Menu from "./component/layout/Header/Menu";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [clicked, isClicked] = useState(false);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header clicked={clicked} isClicked={isClicked} />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />

        <Route path="/login" element={<LoginSignUp />} />
        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <LoginSignUp />}
        />
        <Route
          path="/me/update"
          element={isAuthenticated ? <UpdateProfile /> : <LoginSignUp />}
        />
        <Route
          path="/password/update"
          element={isAuthenticated ? <UpdatePassword /> : <LoginSignUp />}
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
      </Routes>

      <Footer />
      {clicked ? <Menu /> : null}
    </Router>
  );
}

export default App;
