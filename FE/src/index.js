import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />, root);
