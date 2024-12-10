import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCartStore } from "../../Store/cartStore";

const CheckoutForm = () => {
  // Fetch cart items and total price from Zustand
  const { items, clearCart } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  // Validation Schema
  const schema = yup
    .object({
      firstName: yup
        .string()
        .min(3, "First name should have at least 3 characters")
        .max(20, "First name should have at most 20 characters")
        .required("First name is required"),
      lastName: yup
        .string()
        .min(3, "Last name should have at least 3 characters")
        .max(15, "Last name should have at most 15 characters")
        .required("Last name is required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Please enter a valid email address"
        )
        .required("Email is required"),
      address: yup
        .string()
        .min(5, "Address should have at least 5 characters")
        .required("Address is required"),
      postalCode: yup
        .string()
        .matches(/^\d{4}$/, "Postal code should be 4 digits")
        .required("Postal code is required"),
    })
    .required();

  type CheckoutFormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log("User Details:", data);
    console.log("Cart Items:", items);
    console.log("Total:", total);

    alert("Checkout complete!");

    // Clear the cart after successful checkout
    clearCart();
    reset();
  };

  return (
    <div className="container mx-auto max-w-md p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{item.title}</span>
                  <span>
                    {item.quantity} x {item.discountedPrice.toFixed(2)} NOK
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>{total.toFixed(2)} NOK</span>
            </div>
          </>
        )}
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-medium mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={`w-full p-2 border rounded ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-medium mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={`w-full p-2 border rounded ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className={`w-full p-2 border rounded ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block font-medium mb-1">
            Postal Code
          </label>
          <input
            id="postalCode"
            type="text"
            {...register("postalCode")}
            className={`w-full p-2 border rounded ${
              errors.postalCode ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 rounded ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
