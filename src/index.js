import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./frontOffice/reducer";
import App from "./App";
// {import AppBack from "./backOffice/AppBack";}
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/admin" component={AppBack} /> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
