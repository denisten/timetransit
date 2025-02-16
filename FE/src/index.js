import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />, root);
