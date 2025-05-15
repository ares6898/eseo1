import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StockLensPage from "./pages/StockLensPage";
import RefractiveLensPage from "./pages/RefractiveLensPage";
import RxLensPage from "./pages/RxLensPage"; // ✅ 추가

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stock-lens" element={<StockLensPage />} />
      <Route path="/stock-lens/refractive" element={<RefractiveLensPage />} />
	  <Route path="/rx-lens" element={<RxLensPage />} />  // ✅ 추가

    </Routes>
  </Router>
);
