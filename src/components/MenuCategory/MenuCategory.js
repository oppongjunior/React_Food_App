import React from "react";
import "./MenuCategory.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MenuItems } from "../../data";
import MenuItem from "./MenuItem";

function MenuCategory() {
  const options = {
    margin: 30,
    responsiveClass: true,
    autoplay: true,
    loop:true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="menu-category mt-3">
      <h3 className="h5">Food Category</h3>
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        {MenuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </OwlCarousel>
    </div>
  );
}

export default MenuCategory;
