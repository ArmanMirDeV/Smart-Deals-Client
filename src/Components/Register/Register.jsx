import React from 'react';

const Register = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
            Register Now!
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Login Now
            </a>
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Mariam Swarna"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="smsowkothasan@gmail.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Image-URL
              </label>
              <input
                type="text"
                placeholder="smsowkothasan@gmail.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition hover:cursor-pointer"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 font-medium hover:cursor-pointer">
              Sign Up With Google
            </span>
          </button>
        </div>
      </div>
    );
};

export default Register;