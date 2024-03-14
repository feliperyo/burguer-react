import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./globalStyles";
import NavigateRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigateRoutes />
    <GlobalStyles />
  </React.StrictMode>
);
