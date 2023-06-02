import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Page/Login';
// import Signup from './Page/Signup';
import SignIn from './Page/Signup';
import NotFound from './Page/Notfound';
import Cart from './Page/Cart';
import { ToastContainer } from 'react-toastify';
import BookCard from './Component/BookCard';
import AllProducts from './Page/AllProducts';
import { useState } from 'react';
import LoginBottomNav from './Component/LoginBottomNav';
import { EditProduct } from './Page/EditProduct';
import UpdateProfile from './Page/UpdateProfile';
import BooksPagList from './Page/Books';
import { AddProduct } from './Page/AddProduct';


const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='signup' element={<SignIn />} />
        <Route path='/cart' element={IsLogin.isLogin ? <Cart /> : <Login />} />
        {/* <Route path='/bookcard' element={isLogin ? <BookCard />:<Login />} /> */}
        {/* <Route path='/productlist' element={IsLogin.isLogin ? <AllProducts /> : <Login />} /> */}
        <Route path='/productlist' element={<AllProducts />} />
        <Route path='/editbook' element={<EditProduct />} />
        <Route path='/bookpaglist' element={<BooksPagList />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <LoginBottomNav />
    </>
  );
}
const IsLogin = () => {
  var [isLogin, setIsLogin] = useState(false);
  const Loggedin = () => {
    setIsLogin(true);
  }
  const Loggedout = () => {
    setIsLogin(false);
  }
}
export default App;
export { IsLogin };
