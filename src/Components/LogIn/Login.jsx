import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // ✅ should be react-router-dom
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext"; // ✅ correct context import

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext); // ✅ use the context object, not the provider
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("❌ Login failed:", err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      console.error("❌ Google login failed:", err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Login
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 hover:underline font-medium"
          >
            Register Now
          </Link>
        </p>

        {/* Login form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium text-gray-700">Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
