import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// App bileşenine yazılan kodları html'in içerisindeki root id'li bileşenin içerisine gönderir.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
