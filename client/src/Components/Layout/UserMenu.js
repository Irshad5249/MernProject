import React from "react";
import { Link } from "react-router-dom";
import Meta from "../Meta";
const UserMenu = () => {
  return (
<>
<Meta title="dashboad-user Menu"/>
<div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <Link
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </Link>
        </div>
      </div>
    </div>
</>
   
  );
};

export default UserMenu;