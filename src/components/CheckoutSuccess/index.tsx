import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Checkout Success!</h1>
      <Link to="/" className="bg-gray-700 text-white px-4 py-2 rounded mt-4">
        Back to store
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
