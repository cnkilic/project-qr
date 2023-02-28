import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Drawer from "./pages/OrderSummaryPages/Drawer";
import Payment from "./pages/PaymentPage/Payment";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:deviceId/:drawerId" element={<Drawer />} />
          <Route
            path="/:deviceId/:drawerId/payment"
            exact
            element={<Payment />}
          />

          <Route
            path="/"
            exact
            element={<Navigate to="/00:00:00:00:00:00/1" replace />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
