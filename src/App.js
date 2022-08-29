import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/productsList/ProductsList";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "./redux/slices/cartSlice";
import Home from "./pages/home/Home";
import { closeModal } from "./redux/slices/cartModalSlice";
import { ToastContainer } from "react-toastify";
import SlideUp from "./components/SlideUp/SlideUp";
import Cookies from "./components/Cookies/Cookies";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(closeModal());
    setShowCookies(false);
  }, []);

  window.addEventListener("click", (e) => {
    e.preventDefault();
  });

  return (
    <div className='App'>
      <Router>
        <ToastContainer />
        <Navbar />
        <SlideUp />
        {showCookies && <Cookies setShowCookies={setShowCookies} />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/list/:items"} element={<ProductsList />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/details/:Id"} element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
