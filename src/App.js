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
import { openModal, closeModal } from "./redux/slices/cartModalSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  useEffect(() => {
    dispatch(closeModal());
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/list"} element={<ProductsList />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/details/:Id"} element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
