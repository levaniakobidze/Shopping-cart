import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
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
import SlideUp from "../src/components/SlideUp/SlideUp";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 3,
  color: "white",
});

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

  useEffect(() => {
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 800);
  }, [window.location.pathname]); //

  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
