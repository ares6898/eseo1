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
import MultifocalLensPage11 from "./pages/MultifocalLensPage11";
import MultifocalLens_p from "./pages/MultifocalLens_p";
import PhotoLensPage from "./pages/PhotoLensPage";
import Tinted from "./pages/tinted";
import Multifocal_CH from "./pages/Multifocal_CH";
import Kids from "./pages/Kids";
//착색다초점
import Progressive_tinted_R from "./pages/Progressive_lens/tinted/Progressive_tinted_R";
import Progressive_tinted_S from "./pages/Progressive_lens/tinted/Progressive_tinted_S";
import Progressive_tinted_1Basic from "./pages/Progressive_lens/tinted/Progressive_tinted_1Basic";
import Progressive_tinted_2P from "./pages/Progressive_lens/tinted/Progressive_tinted_2P";
import Progressive_tinted_2Standard from "./pages/Progressive_lens/tinted/Progressive_tinted_2Standard";
import Progressive_tinted_3Advanced from "./pages/Progressive_lens/tinted/Progressive_tinted_3Advanced";
import Progressive_tinted_4Supreme from "./pages/Progressive_lens/tinted/Progressive_tinted_4Supreme";
//변색다초점
import Progressive_photo_R from "./pages/Progressive_lens/photochromic/Progressive_photo_R";
import Progressive_photo_S from "./pages/Progressive_lens/photochromic/Progressive_photo_S";
import Progressive_photo_1Basic from "./pages/Progressive_lens/photochromic/Progressive_photo_1Basic";
import Progressive_photo_2P from "./pages/Progressive_lens/photochromic/Progressive_photo_2P";
import Progressive_photo_2Standard from "./pages/Progressive_lens/photochromic/Progressive_photo_2Standard";
import Progressive_photo_3Advanced from "./pages/Progressive_lens/photochromic/Progressive_photo_3Advanced";
import Progressive_photo_4Supreme from "./pages/Progressive_lens/photochromic/Progressive_photo_4Supreme";

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
	  <Route path="/multifocal-lens-11" element={<MultifocalLensPage11 />} />
	  <Route path="/multifocal-lens/p" element={<MultifocalLens_p />} />
	  <Route path="/Multifocal_CH" element={<Multifocal_CH />} />
	  <Route path="/stock-lens/PhotoLensPage" element={<PhotoLensPage />} />
	  <Route path="/stock-lens/tinted" element={<Tinted />} />
	  <Route path="/stock-lens/Kids" element={<Kids />} />
	  
	  //착색다초점
	  <Route path="/Progressive_tinted_R" element={<Progressive_tinted_R />} />
	  <Route path="/Progressive_tinted_S" element={<Progressive_tinted_S />} />
	  <Route path="/Progressive_tinted_1Basic" element={<Progressive_tinted_1Basic />} />
	  <Route path="/Progressive_tinted_2P" element={<Progressive_tinted_2P />} />
	  <Route path="/Progressive_tinted_2Standard" element={<Progressive_tinted_2Standard />} />
	  <Route path="/Progressive_tinted_3Advanced" element={<Progressive_tinted_3Advanced />} />
	  <Route path="/Progressive_tinted_4Supreme" element={<Progressive_tinted_4Supreme />} />
	  
	  //변색다초점
	  <Route path="/Progressive_photo_R" element={<Progressive_photo_R />} />
	  <Route path="/Progressive_photo_S" element={<Progressive_photo_S />} />
	  <Route path="/Progressive_photo_1Basic" element={<Progressive_photo_1Basic />} />
	  <Route path="/Progressive_photo_2P" element={<Progressive_photo_2P />} />
	  <Route path="/Progressive_photo_2Standard" element={<Progressive_photo_2Standard />} />
	  <Route path="/Progressive_photo_3Advanced" element={<Progressive_photo_3Advanced />} />
	  <Route path="/Progressive_photo_4Supreme" element={<Progressive_photo_4Supreme />} />
	  
	  
	  
	  
    </Routes>
  </Router>
);
