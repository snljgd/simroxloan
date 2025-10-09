import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <App/>
    </BrowserRouter>


  </StrictMode>,
)


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>   {/* ✅ Router context starts here */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
