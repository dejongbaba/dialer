import React from "react";
import { useHistory } from "react-router";
import "./login.scss";
import placeHolder from "../../assets/png/profile-image.jpeg";
function Login() {
  const history = useHistory();
  return (
    <div className="login w-full  h-screen mx-auto align-center">
      <form className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="login-image">
          <img src={placeHolder} alt="login" />
        </div>
        <div className="flex flex-col">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => history.push("/dashboard")}
            >
              Sign In
            </button>
            <span
              onClick={() => history.push("/forgot-password")}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </span>
          </div>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 sanimara Corp. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
