import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../FireConfig";
import ProductItem from "../components/Product/ProductItem";

function Home() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(fireDB, "products"));
      const newProducts = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const newProduct = {
          id: doc.id,
          ...doc.data(),
        };
        newProducts.push(newProduct);
      });
      setProducts(newProducts);
    } catch (e) {
      console.log("Error occured during load : ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (products.length === 0) {
    return (
      <Layout>
        <div className="container py-5">
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border loader" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container">
        <div className="row py-5">
          {products.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
