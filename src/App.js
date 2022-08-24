import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/productsList/ProductsList";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "./redux/slices/cartSlice";
import { Home } from "@mui/icons-material";
import { closeModal } from "./redux/slices/cartModalSlice";
import { closeFilter } from "./redux/slices/cartSlice";
import { closeMenu } from "./redux/slices/navbarSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(closeModal());
  }, []);

  ////////// Close filter onload on mobiles //////

  // window.addEventListener("onload", () => {
  //   if (window.innerWidth < 787) {
  //     dispatch(closeFilter());
  //     dispatch(closeMenu());
  //   }
  // });

  return (
    <div className='App'>
      <Router>
        <Navbar />
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
