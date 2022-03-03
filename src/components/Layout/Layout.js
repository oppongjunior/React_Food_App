import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Layout(props) {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
