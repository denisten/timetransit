import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SeaCargoInfoPage } from "./pages/sea";
import { TruckCargoInfoPage } from "./pages/truck";
import { TrainCargoInfoPage } from "./pages/train";
import { AviaCargoInfoPage } from "./pages/avia";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sea",
    element: <SeaCargoInfoPage />,
  },
  {
    path: "/truck",
    element: <TruckCargoInfoPage />,
  },
  {
    path: "/train",
    element: <TrainCargoInfoPage />,
  },
  {
    path: "/avia",
    element: <AviaCargoInfoPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
