import React from "react";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import ProductItem from "../components/Product/ProductItem";

function Favorite() {
  const ProductState = useSelector((state) => state.ProductState);
  if (ProductState.fav.length === 0) {
    return (
      <Layout>
        <div className="container">
          <div className="row py-5">
            <div className="col-m-10">
              <div className="alert alert-danger" role="alert">
                No favorites available
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-5">
        <h3 className="text-center">My Favorites</h3>
        <div className="row">
          {ProductState.fav.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Favorite;
