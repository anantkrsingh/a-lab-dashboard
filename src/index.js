import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NotificationsProvider } from "@mantine/notifications";

import App from "./App";
import "./style/base.css";

import "antd/dist/reset.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import ExperimentsContextProvider from "./context/experimentContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginA from "./auth/login";


const root = ReactDOM.createRoot(document.getElementById("root"));
const user = localStorage.getItem("userAuthenticated");

root.render(
  
    <ExperimentsContextProvider>
      <NotificationsProvider position="top-right" zIndex={2077}>
        <BrowserRouter>
          <Routes>
            {user === "true" && <Route path="*" exact element={<App />} />}
            <Route path="/login" element={<LoginA />}></Route>
            <Route
              path="*"
              element={<Navigate replace to="/login" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </ExperimentsContextProvider>
  ,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
