import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import { AppProvider } from "./Context/productcontext/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>...Loading</div>}>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={(prop) => prop != "shake"}>
        <AppProvider>
          <App />
        </AppProvider>
      </StyleSheetManager>
    </BrowserRouter>
  </Suspense>
);
