import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("visa");
  const [paymentStatus, setPaymentStatus] = useState("");
  const params = useParams();
  const { deviceId, drawerId } = params;

  const backPath = `/${deviceId}/${drawerId}`;
  const homepath = `/${deviceId}/${drawerId}`;
  const navigate = useNavigate();

  const formFinishhandler = (e) => {
    e.preventDefault();
    // console.log("e.target:", e.target.nameOnCard.value);
    // console.log("e.target:", e.target.cardNumber.value);
    // console.log("e.target:", e.target.valid.value);
    // console.log("e.target:", e.target.cvv.value);
    setPaymentStatus("success");

    sendPaymentStatus(deviceId, drawerId);
  };

  const sendPaymentStatus = (deviceId, drawerId) => {
    let data = { deviceId: deviceId, drawerId: drawerId };

    fetch("https://vendugo.com/purchase", {
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
      <div className="paymentPage-container">
        <a href={backPath}>
          <img
            className="backIcon"
            src="/assets/images/backButton.png"
            alt=""
          />
        </a>
        <div className="pageTitle ">Payment Methods</div>
        <div className="payment-wrapper">
          <div className="paymentOptions">
            <div
              onClick={() => {
                setSelectedPayment("visa");
              }}
              className={selectedPayment == "visa" ? "selectedPayment" : ""}
            >
              <img
                className="paymentImg"
                src="/assets/images/visa.png"
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setSelectedPayment("masterCard");
              }}
              className={
                selectedPayment == "masterCard" ? "selectedPayment" : ""
              }
            >
              <img
                className="paymentImg"
                src="/assets/images/mastercard.png"
                alt=""
              />
            </div>
            <div
              onClick={() => {
                setSelectedPayment("paypal");
              }}
              className={selectedPayment == "paypal" ? "selectedPayment" : ""}
            >
              <img
                className="paymentImg"
                src="/assets/images/paypal.png"
                alt=""
              />
            </div>
          </div>
          {(selectedPayment == "visa" || selectedPayment == "masterCard") && (
            <form onSubmit={formFinishhandler} action="">
              <div className="inputItem">
                <label htmlFor="nameOnCard">Name on Card :</label>
                <input
                  className="formInput"
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  placeholder="John Smith"
                  required
                  defaultValue="John Smith"
                />
              </div>

              <div className="inputItem">
                <label htmlFor="cardNumber">Card Number :</label>
                <input
                  className="formInput"
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="**** **** **** ****"
                  required
                  defaultValue="1234 1234 1234 1234"
                />
              </div>

              <div className="row">
                <div className="inputItem">
                  <label htmlFor="valid">Valid :</label>
                  <input
                    className="formInput"
                    id="valid"
                    name="valid"
                    type="text"
                    placeholder="MM / YY*"
                    required
                    defaultValue="07 / 25 "
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="cvv">CVV :</label>
                  <input
                    className="formInput"
                    id="cvv"
                    name="cvv"
                    type="password"
                    placeholder="***"
                    required
                    defaultValue="025"
                  />
                </div>
              </div>
              <div className="submitButtonWrapper">
                <button className="paymentButton" type="submit">
                  <div className="">Make Payment</div>
                  {/* <div className="totalPayment">$12</div> */}
                </button>
              </div>
            </form>
          )}
          {selectedPayment == "paypal" && (
            <form onSubmit={formFinishhandler} action="">
              <div className="inputItem">
                <label htmlFor="nameOnCard">E-Mail :</label>
                <input
                  className="formInput"
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  placeholder="johnSmith@gmail.com"
                  required
                  defaultValue="johnSmith@gmail.com"
                />
              </div>

              <div className="inputItem">
                <label htmlFor="cardNumber">Password</label>
                <input
                  className="formInput"
                  id="cardNumber"
                  name="cardNumber"
                  type="password"
                  placeholder="********"
                  required
                  defaultValue="12341234"
                />
              </div>

              <div className="submitButtonWrapper">
                <button className="paymentButton" type="submit">
                  <div className="">Make Payment</div>
                  {/* <div className="totalPayment">$12</div> */}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {paymentStatus === "success" && (
        <>
          <div className="backdrop"></div>
          <div className="popup">
            <div className="popup-content">
              <div className="popup-content-part1">
                <div>
                  <img
                    className="checkIcon"
                    src="/assets/images/checkIcon.png"
                    alt=""
                  />{" "}
                </div>
                <h2 className="successText">Payment Successful ! </h2>
              </div>

              <div className="popup-content-part2">
                <div className="success-text">
                  <div>Amount Paid : </div>
                  <div> $11.00</div>
                </div>
                <div className="success-text">
                  <div>Method :</div>
                  <div> VISA</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setPaymentStatus("");
                  navigate(homepath);
                }}
                className="close-button"
              >
                Back to Home
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Payment;
