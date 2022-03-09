import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Checkout from "./Pages/Checkout";
import Settings from "./Pages/Settings";
import Error from "./Pages/Error";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useEffect } from "react";
import { loadCartFunc, loadFavFunc, loadFoodsFunc } from "./Redux/Actions";
import { useDispatch } from "react-redux";
import TopNavbar from "./components/Navbars/TopNavbar";
import BottomNavbar from "./components/Navbars/BottomNavbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFunc());
    dispatch(loadFavFunc());
    dispatch(loadFoodsFunc());
  }, []);
  return (
    <>
      <TopNavbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/ordered" element={<Checkout />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <BottomNavbar />
      </BrowserRouter>
    </>
  );
}

export default App;
