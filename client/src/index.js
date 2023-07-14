import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../../client/src/Styles/Homepage.css"

import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from "./context/auth";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Components/context/auth';
import 'antd/dist/reset.css';

import { SearchProvider } from './Components/context/search';
import { CartProvider } from './Components/context/cart';
// import { CartProvider } from "./context/cart";

// import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



    //  <React.StrictMode> 
    //  <App />
    // </React.StrictMode>


    <AuthProvider>
        <SearchProvider>
            <CartProvider>
   {/* <BrowserRouter> */}
       <App />       
       </CartProvider>          
    {/* </BrowserRouter> */}

        </SearchProvider>
             
  
    </AuthProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
