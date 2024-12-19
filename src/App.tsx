import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landingpage from "./components/Landingpage";
import SpecificProduct from "./components/SpecificProduct";
import ContactForm from "./components/ContactForm";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutPage";
import { ToastContainer } from "react-toastify";
import CheckoutSuccess from "./components/CheckoutSuccess";

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landingpage />} />
          <Route path="products/:id" element={<SpecificProduct />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutForm />} />
          <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
