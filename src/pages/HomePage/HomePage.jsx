import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import DrawerItemHome from "../../components/DrawerItem/DrawerItemHome";

function HomePage() {
  // const { deviceId } = params;

  const drawerItems = [
    {
      name: "Fruit Box",
      content: "3 Apple, 2 Orange, Grape, Banana",
      price: "$14",
      link: "00:00:00:00/1",
      img: "assets/images/fruitBox.png",
    },
    {
      name: "Cleaning Box",
      content: "2 powerwash, Clorox, Woolite",
      price: "$24",
      link: "00:00:00:00/2",
      img: "assets/images/cleaningBox.png",
    },
    {
      name: "Fruit Box",
      content: "3 Apple, 2 Orange, Grape, Banana",
      price: "$14",
      link: "00:00:00:00/3",
      img: "assets/images/fruitBox.png",
    },
    {
      name: "Cleaning Box",
      content: "2 powerwash, Clorox, Woolite",
      price: "$24",
      link: "00:00:00:00/4",
      img: "assets/images/cleaningBox.png",
    },
  ];

  return (
    <div className="homePage-container">
      <div className="pageTitle">Products</div>
      {drawerItems.map((drawerItem, index) => (
        <DrawerItemHome key={index} itemData={drawerItem} />
      ))}
    </div>
  );
}

export default HomePage;
