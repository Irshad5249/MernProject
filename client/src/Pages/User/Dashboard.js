import React from "react";
import { useAuth } from "../../Components/context/auth";
import UserMenu from "../../Components/Layout/UserMenu";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <>
     <div className="container-fluid" title={"Dashboard - Ecommerce App"} style={{height:"50vh"}}>
      <div className=" m-3 p-3 dashboard" >
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Dashboard;

