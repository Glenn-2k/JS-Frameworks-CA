import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
      .max(10, "Last name should have at most 10 characters")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
      )
      .required("Email is required"),
    body: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .max(500, "Your message can not be longer than 500 characters.")
      .required("Please enter your message"),
  })
  .required();

type formData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: formData) {
    console.log(data);
    alert("Your message has been sent!");
    reset();
  }

  return (
    <div className="container mx-auto max-w-md p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
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

        {/* Message Body */}
        <div>
          <label htmlFor="body" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="body"
            {...register("body")}
            rows={5}
            className={`w-full p-2 border rounded ${
              errors.body ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          <p className="text-red-500 text-sm">{errors.body?.message}</p>
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
