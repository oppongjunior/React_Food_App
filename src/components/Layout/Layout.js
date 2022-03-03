import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css"

function Layout(props) {
  return (
    <>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
