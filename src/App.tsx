import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landingpage from "./components/Landingpage";
import SpecificProduct from "./components/SpecificProduct";
import ContactForm from "./components/ContactForm";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutPage";

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
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
