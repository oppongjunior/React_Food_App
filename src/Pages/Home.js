import React from "react";
import Banner from "../components/Banner/Banner";
import Cart from "../components/Cart/Cart";
import FoodList from "../components/Foods/FoodList";
import MenuCategory from "../components/MenuCategory/MenuCategory";
import BottomNavbar from "../components/Navbars/BottomNavbar";
import TopNavbar from "../components/Navbars/TopNavbar";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import fireDB from "../FireConfig";
import { FoodData } from "../data";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function Home() {
  const createData = async () => {
    FoodData.map(async (item) => {
      try {
        await setDoc(doc(fireDB, "foods", `${item.id}`), item);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const ProductState = useSelector((state) => state.ProductState);

  return (
    <>
      <TopNavbar />
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
      <BottomNavbar />
    </>
  );
}

export default Home;
