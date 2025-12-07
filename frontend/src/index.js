import React from "react";
import ReactDOM from "react-dom/client";  // ✅ correct package
import App from "./App";
import "./App.css"
import { CartProvider } from "./store/context/Cartcontext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<CartProvider>
<App />
</CartProvider>


);
