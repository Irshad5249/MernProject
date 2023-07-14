// import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = (props) => {
    return (
<>

<Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header/>
     <Outlet/>
     <ToastContainer/>
      <Footer />
   
</>
     
    )
}

Layout.defaultProps = {
    title: "Ecommerce app - shop now",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Techinfoyt",
  };
export default Layout