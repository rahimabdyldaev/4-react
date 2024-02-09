import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from './store';
import  ReactDOM  from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);