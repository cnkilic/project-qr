import React from "react";
import "./DrawerItemOrderSummary.css";

function DrawerItemOrderSummary(props) {
  const { name, price, quantity, img } = props.drawerItemData;

  return (
    <div className="draweritem-wrapper">
      <div className="image-wrapper">
        <img className="fruitImg" src={img} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="content-title">{name}</div>
        <div className="content-quantitity">x {quantity}</div>
      </div>
      <div className="price-wrapper">${price}</div>
    </div>
  );
}

export default DrawerItemOrderSummary;
