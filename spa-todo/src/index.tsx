import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./Reset.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./user.interfaceLayer/Pages/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
