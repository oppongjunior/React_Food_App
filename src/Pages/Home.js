import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../FireConfig";
import { data } from "../data";
import ProductItem from "../components/Product/ProductItem";

function Home() {
  const [products, setProducts] = useState([]);
  const addToStore = () => {
    data.map(async (product) => {
      try {
        await addDoc(collection(fireDB, "products"), product);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  };

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
          <div class="d-flex justify-content-center py-5">
            <div class="spinner-border loader" role="status">
              <span class="visually-hidden">Loading...</span>
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
