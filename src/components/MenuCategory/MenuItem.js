import React from "react";
import { useDispatch } from "react-redux";
import { selectCategoryFunc } from "../../Redux/Actions";
import "./MenuCategory.css";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const changeCategory = ()=>{
    dispatch(selectCategoryFunc(item.itemId));
  }
  return (
      <div className="item menu-item my-5" onClick={changeCategory}>
        <img src={item.imgSrc} className="menu-item-image" alt="" />
        <h6 className="h6 text-uppercase">{item.name}</h6>
      </div>
  );
}

export default MenuItem;
