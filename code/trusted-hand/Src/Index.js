// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style/global.css"; // ← Import your global styles

require('dotenv').config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
