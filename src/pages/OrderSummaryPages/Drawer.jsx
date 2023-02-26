import React from "react";
import { useParams } from "react-router-dom";
import "./Drawer.css";
import DrawerItemOrderSummary from "../../components/DrawerItemOrderSummary/DrawerItemOrderSummary";

function Drawer() {
  const params = useParams();
  const { deviceId, drawerId } = params;
  const backPath = `/${deviceId}`;

  const drawerItem = {
    name: "Fruit Box",
    totalPrice: "$14",
    link: "00:00:00:00/1",
    img: "assets/images/fruitBox.png",
    content: [
      {
        name: "Apple",
        price: 3,
        quantity: 3,
        img: "/assets/images/apple.png",
      },
      {
        name: "Orange",
        price: 2,
        quantity: 2,
        img: "/assets/images/orange.png",
      },
      {
        name: "Grape",
        price: 1,
        quantity: 1,
        img: "/assets/images/grape.png",
      },
      {
        name: "Banana",
        price: 2,
        quantity: 1,
        img: "/assets/images/banana.png",
      },
    ],
  };

  let paymentLink = `/${drawerItem.link}/payment`;

  console.log("paymentLink:", paymentLink);

  function totalPriceFounder(drawerItemsArray) {
    let totalPrice = 0;
    drawerItemsArray.forEach((drawerItem) => {
      totalPrice = totalPrice + drawerItem.price * drawerItem.quantity;
    });
    return totalPrice;
  }

  return (
    <>
      <div className="drawerPage-container">
        <a href={backPath}>
          <img
            className="backIcon"
            src="/assets/images/backButton.png"
            alt=""
          />
        </a>
        <div className="pageTitle">Drawer 1</div>
        <div className="orderSummary-wrapper">
          {drawerItem.content.map((drawerItem, index) => (
            <DrawerItemOrderSummary key={index} drawerItemData={drawerItem} />
          ))}

          <div className="totalAmount-wrapper">
            <div className="totalAmount-text">Total Amount</div>
            <div className="totalAmount-price">
              ${totalPriceFounder(drawerItem.content)}
            </div>
          </div>
          <div className="footerButtons">
            <a href={paymentLink}>
              <div className="button continueButton">Continue</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
