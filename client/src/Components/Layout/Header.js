import React from 'react'
import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SearchInput from "../Form/SearchInput";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
import { useCart } from '../context/cart';
import { Badge } from "antd";
import { useAuth } from '../context/auth';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';

const Header = () => {
  const [auth, setAuth] = useAuth()
  const [cart] = useCart()
  const categories = useCategory()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">Hidden brand</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <SearchInput />
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
         <Link className="nav-link active " to="/category">Category</Link>
        </li> */}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>


              {
                !auth.user ? (<>
                  <li className="nav-item" >
                    <Link className="nav-link active" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active " to='/login'>Login</Link>
                  </li>
                </>) : (<>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link active " to='/login'>Log Out</Link>
                  </li>

                </>)
              }
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </Link>
              </li>
        
            </ul>

          </div>
        </div>
      </nav>



    </>
  )
}

export default Header
