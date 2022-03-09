import React from "react";
import Banner from "../components/Banner/Banner";
import Cart from "../components/Cart/Cart";
import FoodList from "../components/Foods/FoodList";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function Home() {
  const ProductState = useSelector((state) => state.ProductState);

  return (
    <>
      <div className="body">
        <div className="main-content">
          <div className="container">
            <Banner />
            <MenuCategory />

            {ProductState.loadFoods ? (
              <Loading />
            ) : ProductState.foodsError ? (
              <h1>Error</h1>
            ) : (
              <FoodList />
            )}
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default Home;
