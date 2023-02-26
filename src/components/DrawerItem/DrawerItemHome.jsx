import React from "react";
import "./DrawerItemHome.css";

function DrawerItem(props) {
  const { name, content, price, img ,link} = props.itemData;

  return (
    <a href={link}>
      <div className="drawerItem-container">
        <div className="image-wrapper">
          <img
            className="fruitBoxImg"
            src={img}
            alt=""
          />
        </div>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <div className="text-title">{name}</div>
            <div className="text-description">{content}</div>
          </div>
          <div className="price">{price}</div>
        </div>
      </div>
    </a>
  );
}

export default DrawerItem;
