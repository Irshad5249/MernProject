import './App.css';
// import Header from './Components/Layout/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import Policy from './Pages/Policy';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Dashboard from './Pages/User/Dashboard';
import PrivateRoute from './Components/Routes/Private';
import ForgotPassword from './Pages/auth/ForgotPassword';
import AdminRoute from './Components/Routes/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CreateCategory from './Pages/Admin/CreateCategory';
import CreateProduct from './Pages/Admin/CreateProduct';
import User from './Pages/Admin/User';
import Orders from './Pages/User/Orders';
import Products from './Pages/Admin/Products';
import UpdateProduct from './Pages/Admin/UpdateProduct';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from './Pages/CartPage';
import Profile from './Pages/User/Profile';


// import Layout from './Components/Layout/Layout';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
   
    <Route exact   path='/' element={<Layout />} >
    <Route exact path="/" element={<HomePage/>} />
    <Route exact path="/product/:slug" element={<ProductDetails/>} />
    <Route path="/category/:slug" element={<CategoryProduct />} />
    <Route path="/cart" element={<CartPage />} />
    <Route exact path="/categories" element={<Categories/>} />
    <Route exact path="/search" element={<Search/>} />
    {/* <Route path="user/orders" element={<Orders />} /> */}
          {/* <Route path="user/profile" element={<Profile />} /> */}


    <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
           <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
           <Route path="admin/products" element={<Products />} />
            <Route path="admin/users" element={<User />} />
            {/* <Route path="admin/orders" element={<AdminOrders />} />  */}
        </Route>
    {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
    <Route exact  path="/about" element={<About />} />
    <Route exact  path="/Register" element={<Register />} />
    <Route exact  path="/forgotpassword" element={<ForgotPassword />} />
    <Route exact  path="/login" element={<Login />} />
        <Route exact  path="/contact" element={<Contact />} />
        <Route  exact path="/policy" element={<Policy />} />
        <Route exact  path="*" element={<Pagenotfound />} />
      
    </Route>
      
     
    </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
