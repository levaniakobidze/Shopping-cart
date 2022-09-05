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
import Cookies from "./components/Cookies/Cookies";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showCookies, setShowCookies] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(closeModal());
    setShowCookies(true);
  }, []);

  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />

      {showCookies && <Cookies setShowCookies={setShowCookies} />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/list/:items"} element={<ProductsList />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/details/:Id"} element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
