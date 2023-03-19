import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Drawer.css";

function Drawer() {
  const params = useParams();
  const { deviceId, drawerId } = params;

  let paymentLink = `/${deviceId}/${drawerId}/payment`;

  useEffect(() => {
    if (drawerId && drawerId) {
      sendPurchaseAttempt(deviceId, drawerId);
    }
  }, []);

  const sendPurchaseAttempt = (deviceId, drawerId) => {
    let data = { deviceId: deviceId, drawerId: drawerId };

    fetch("https://vendugo.com/attempt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="drawerPage-container">
        <div className="orderSummary-wrapper">
          <div className="pageTitle">Confirm Payment</div>

          <div className="payment-row drawerBox-wrapper">
            <div>Drawer {drawerId}</div>
            <div>$9.00</div>
          </div>
          <div className="payment-row ">
            <div>Subtotal</div>
            <div>$9.00</div>
          </div>
          <div className="payment-row topBorderLine">
            <div>Tax</div>
            <div>$2.00</div>
          </div>
          <div className="payment-row topBorderLine">
            <div className="total-text">Total</div>
            <div className="total-price">$11.00</div>
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
