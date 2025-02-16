import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Info } from "./pages/info";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
