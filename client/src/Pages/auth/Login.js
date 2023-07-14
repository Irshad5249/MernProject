// import React from 'react'
// import React from 'react'
import { useAuth } from '../../Components/context/auth';
import { toast } from 'react-toastify';

import React, { useState } from "react";

import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
// import toast from "react-hot-toast";
import "../../Styles/AuthStyle.css";
const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[auth,setAuth]=useAuth();

    const navigate = useNavigate();
    const location = useLocation();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/login", {
     
          email,
          password,
       
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
setAuth({
  // ...auth,
  user:res.data.user,
  token:res.data.token
});
localStorage.setItem('auth',JSON.stringify(res.data));
navigate(location.state || "/"); 
          // navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <>
    <div className="container-fluid "  style={{ minHeight: "60vh" }}>
    
    
    <div className="form-container" style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
              <h4 className="title">Login FORM</h4>
            
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgotpassword");
              }}
            >
              Forgot Password
            </button>
          </div>
            
          
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
    </div>
     
     </>
  )
}

export default Login
