// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Toaster } from 'sonner' // import Toaster
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster position='bottom-right' />
  </React.StrictMode>
)
