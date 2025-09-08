import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  // Typed change handlers
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const DEMO_USER = {
      email: "demo@realestate.com",
      password: "demo123",
    };

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setIsLoggedIn(true);
      navigate("/");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="max-h-full flex p-5 items-center justify-center shadow-2xl">
      <div className="border shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <div className="flex flex-row items-center">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <h1 className="text-3xl font-bold text-gray-800 font-mono ml-20">
            Login
          </h1>
        </div>

        <h2 className="text-xl font-bold mb-6 mt-2 text-orange-600">
          Welcome To Our Royal Palm
          <br />
          Real Estate
        </h2>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-orange-500 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
