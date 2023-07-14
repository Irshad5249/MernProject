import React from 'react'
import Meta from '../../Components/Meta'
import AdminMenu from '../../Components/Layout/AdminMenu'

const User = () => {
  return (
 <>
 <Meta title="Dashboard -All users"/>
   <div className='container-fluid'>
      <div className=" m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </div>
 
 </>
  )
}

export default User


