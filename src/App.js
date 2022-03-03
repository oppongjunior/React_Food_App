import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import ProductInfo from "./Pages/ProductInfo";
import Error from "./Pages/Error";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCartFunc, loadFavFunc } from "./Redux/Actions";
import Favorite from "./Pages/Favorite";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFunc());
    dispatch(loadFavFunc());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
