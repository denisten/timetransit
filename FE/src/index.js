import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SeaCargoInfoPage } from "./pages/sea";
import { TruckCargoInfoPage } from "./pages/truck";
import { TrainCargoInfoPage } from "./pages/train";
import { AviaCargoInfoPage } from "./pages/avia";
import { AnimatePresence } from "framer-motion";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sea" element={<SeaCargoInfoPage />} />
          <Route path="/truck" element={<TruckCargoInfoPage />} />
          <Route path="/train" element={<TrainCargoInfoPage />} />
          <Route path="/avia" element={<AviaCargoInfoPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
);
