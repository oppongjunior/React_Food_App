import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import fireDB from "../FireConfig";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { BsHeart, BsCartPlus, BsHeartFill, BsCartXFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartFunc,
  addToFavFunc,
  removeFromCartFunc,
  removeFromFavFunc,
} from "../Redux/Actions";

function ProductInfo() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const productId = useParams().id;

  const getData = async () => {
    try {
      const productData = await getDoc(doc(fireDB, "products", productId));
      setProduct({ ...productData.data(), id: productId });
    } catch (e) {
      console.log("Error occured during load : ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const ProductState = useSelector((state) => state.ProductState);
  const dispatch = useDispatch();

  const inCart = ProductState.cart.filter((item) => item.id === productId);
  const inFav = ProductState.fav.filter((item) => item.id === productId);

  const addToCart = () => {
    let newCart = [...ProductState.cart, { ...product, count: 1 }];
    dispatch(addToCartFunc(newCart));
  };

  //removeCart
  const removeCart = () => {
    let newCart = ProductState.cart.filter((item) => item.id !== productId);
    dispatch(removeFromCartFunc(newCart));
  };

  //add fav
  const addToFav = () => {
    let newFav = [...ProductState.fav, product];
    dispatch(addToFavFunc(newFav));
  };

  //remove fav
  const removeFav = () => {
    let newFav = ProductState.fav.filter((item) => item.id !== productId);
    dispatch(removeFromFavFunc(newFav));
  };

  if (!product) {
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
      <div className="product-info py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div>
                    <img src={product.image} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mt-1 mb-3">
                    <div className="card-header">{product.title}</div>
                    <div className="card-body">
                      <h5 className="card-title">Price : ${product.price}</h5>
                      <h6 className="card-subtitle mt-3 ">Category</h6>
                      <p className="card-text text-uppercase">
                        {product.category}
                      </p>
                      <h6 className="card-subtitle mt-3">Description</h6>
                      <p className="card-text">{product.description}</p>

                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <h6 className="card-subtitle p-0 m-0">Ratings</h6>
                          <p className="card-text text-uppercase ms-2">
                            {product.rating.rate} / 5.0
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <h6 className="card-subtitle p-0 m-0  ">Reviews :</h6>
                          <p className="card-text text-uppercase ms-2">
                            {product.rating.count}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="btn-container text-center p-2">
                        <button className="btn btn-outline-dark">
                          {inCart.length === 0 ? (
                            <BsCartPlus size={20} onClick={addToCart} />
                          ) : (
                            <BsCartXFill size={20} onClick={removeCart} />
                          )}
                        </button>
                        <button className="btn btn-outline-dark ms-2">
                          {inFav.length === 0 ? (
                            <BsHeart size={20} onClick={addToFav} />
                          ) : (
                            <BsHeartFill size={20} onClick={removeFav} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => navigate(-1)}
                    >
                      BACK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductInfo;
