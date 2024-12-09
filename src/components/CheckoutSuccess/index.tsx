import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div>
      <h1>Checkout Success!</h1>
      <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Back to store
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
