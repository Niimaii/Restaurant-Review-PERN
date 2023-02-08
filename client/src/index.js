import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// https://beta.reactjs.org/reference/react-dom/client/createRoot - This is in place ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
