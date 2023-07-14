import React from 'react'

import { Link } from 'react-router-dom';
import Meta from '../Components/Meta';
// import Layout from '../Components/Layout/Layout';
const Pagenotfound = () => {
  return (
    <>
  <Meta title="go back- page not found"/>
    <div container-fluid >
    <div className="pnf">
      <h1 className="pnf-title">404</h1>
      <h2 className="pnf-heading">Oops ! Page Not Found</h2>
      <Link to="/" className="pnf-btn">
        Go Back
      </Link>
    </div>
  </div>
  </>
  )
}

export default Pagenotfound
