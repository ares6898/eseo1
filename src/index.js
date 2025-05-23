import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StockLensPage from "./pages/StockLensPage";
import RefractiveLensPage from "./pages/RefractiveLensPage";
import RxLensPage from "./pages/RxLensPage";
import MultifocalLensPage from "./pages/MultifocalLensPage";
import MultifocalLensBasic from "./pages/MultifocalLensBasic";
import MultifocalLensStandard from "./pages/MultifocalLensStandard";
import MultifocalLensAdvanced from "./pages/MultifocalLensAdvanced";
import MultifocalLensSupreme from "./pages/MultifocalLensSupreme";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stock-lens" element={<StockLensPage />} />
      <Route path="/stock-lens/refractive" element={<RefractiveLensPage />} />
      <Route path="/rx-lens" element={<RxLensPage />} />
      <Route path="/multifocal-lens" element={<MultifocalLensPage />} />
      <Route path="/multifocal-lens/basic" element={<MultifocalLensBasic />} />
      <Route path="/multifocal-lens/standard" element={<MultifocalLensStandard />} />
      <Route path="/multifocal-lens/advanced" element={<MultifocalLensAdvanced />} />
      <Route path="/multifocal-lens/supreme" element={<MultifocalLensSupreme />} />
    </Routes>
  </Router>
);
