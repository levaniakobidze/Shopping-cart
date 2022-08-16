import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/productsList/ProductsList";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ProductsList />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
