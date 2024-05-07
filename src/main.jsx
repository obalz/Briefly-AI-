import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import { store } from "./services/store";
import LoginForm from "./LoginForm/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>{<App />}</Provider>
    </Router>
  </React.StrictMode>
);
