import React, { useState, ChangeEvent, FormEvent, cache } from "react";
import { motion, AnimatePresence, number } from "framer-motion";
import { CheckCircle2, Facebook, Twitter, Eye, EyeOff } from "lucide-react";
import SignInPic from "../assets/SignInPic.png";
import logo from "../assets/logo.svg";
import UserService from "../services/user/UserService";
import { User } from "types/User";
export default function RegisterTwoPanel() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    number: "",
    date_of_birth: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const userService = new UserService();
  const [newuser, setNewUser] = useState<User>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_number: "",
    confirm_password: "",
    address_line1: "",
    date_of_birth: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, address, password, confirmPassword } =
      form;

    if (!firstName || !lastName || !email || !address || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const form = new FormData();
      form.append("first_name", newuser.first_name);
      form.append("last_name", newuser.last_name);
      form.append("email", newuser.email);
      form.append("address", newuser.address_line1);
      form.append("mobile_number", newuser.mobile_number);
      form.append("password", newuser.password);
      form.append("confirm_password", newuser.confirm_password);
      if (newuser.date_of_birth) {
        form.append("date_of_birth", newuser.date_of_birth);
      }
      const response = await userService.register(newuser);
    } catch (error) {
      console.error(error);
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({
      firstName: "",
      date_of_birth: "",
      lastName: "",
      middleName: "",
      email: "",
      number: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT PANEL */}
      <div className="relative flex flex-col justify-center items-center text-black md:w-2/3 p-8 pl-14">
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-yellow-400 rounded-r-full shadow-sm z-0" />

        <div className="relative z-10 text-center w-full flex flex-col items-center gap-6 mb-28">
          <h1 className="text-xl lg:text-4xl font-bold leading-tight mt-2">
            <span className="text-xl lg:text-4xl text-black mb-2 inline-block">
              “ “
            </span>
            <br />
            Let’s Make it Happen Together!
          </h1>
          <img
            src={SignInPic}
            alt="Sign In"
            className="  object-contain rounded-xl"
            height={250}
            width={250}
          />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex justify-center items-center rounded-3xl m-2 bg-gradient-to-b from-yellow-300 to-orange-500 md:w-1/2 ">
        <div className="bg-white/10 backdrop-blur-md text-gray-600 w-full h-full rounded-2xl p-4 shadow-lg ">
          {/* <div className="text-right text-sm mb-4 flex flex-col items-center">
            Already have an account?{" "}
            <a href="#" className="underline font-semibold">
              Log in here!
            </a>
          </div> */}
          <div className="flex flex-row gap-4 justify-center mb-6">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 lg:w-16 lg:h-16 object-contain flex items-center"
            />
            <h2 className="text-sm lg:text-xl text-gray-900 font-bold mt-4 text-center">
              Create a new account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* First, Middle, and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                {/* <label
                  htmlFor="firstName"
                  className="block text-sm mb-1 text-gray-600"
                >
                  First Name
                </label> */}
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={newuser.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
              </div>

              <div>
                {/* <label
                  htmlFor="middleName"
                  className="block text-sm mb-1 text-gray-600"
                >
                  Middle Name
                </label> */}
                <input
                  id="middleName"
                  type="text"
                  name="middleName"
                  value={newuser.middle_name || ""}
                  onChange={handleChange}
                  placeholder="Middle Name"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
              </div>

              <div>
                {/* <label
                  htmlFor="lastName"
                  className="block text-sm mb-1 text-gray-600"
                >
                  Last Name
                </label> */}
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={newuser.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              {/* <label
                htmlFor="email"
                className="block text-sm mb-1 text-gray-900"
              >
                Email
              </label> */}
              <input
                id="email"
                type="email"
                name="email"
                value={newuser.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />
            </div>
            {/* Phone Number and Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={newuser.mobile_number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
              </div>

              <div>
                <input
                  id="dob"
                  type="date"
                  name="date_of_birth"
                  value={newuser.date_of_birth || ""}
                  onChange={handleChange}
                  className="p-3 rounded-lg text-gray-800 w-full h-8"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              {/* <label
                htmlFor="address"
                className="block text-sm mb-1 text-gray-900"
              >
                Address
              </label> */}
              <input
                id="address"
                type="text"
                name="address"
                value={newuser.address_line1}
                onChange={handleChange}
                placeholder=" Address"
                className="p-3 rounded-lg text-gray-800 w-full h-8"
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                {/* <label
                  htmlFor="password"
                  className="block text-sm mb-1 text-gray-900"
                >
                  Create Password
                </label> */}
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="p-3  rounded-lg text-gray-800 w-full   h-8"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2  right-3  cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* <label
                  htmlFor="confirmPassword"
                  className="block text-sm mb-1 text-gray-900"
                >
                  Confirm Password
                </label> */}
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="p-3 rounded-lg text-gray-800 w-full pr-12 h-8"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2  right-3  cursor-pointer text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm">
              <input
                id="terms"
                type="checkbox"
                required
                className="w-5 h-8 accent-yellow-400"
              />
              <label htmlFor="terms" className="text-gray-900">
                Creating your account means you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#f3601c]   text-white py-3 rounded-lg transition duration-200 font-semibold"
            >
              Create Account
            </button>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
                aria-label="Sign up using Facebook"
              >
                <Facebook size={20} /> Facebook
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-900 text-white py-3 rounded-lg transition"
                aria-label="Sign up using Twitter"
              >
                <Twitter size={20} /> Twitter
              </button>
            </div>

            <p className="text-xs text-center mt-8 opacity-70">
              © Copyright 2025. Company Inc. Ltd
            </p>
          </form>
        </div>
      </div>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-8 right-8 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <CheckCircle2 className="text-green-900" size={24} />
            <span>Successfully registered!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
