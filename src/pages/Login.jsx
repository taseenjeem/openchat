import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div className="h-screen md:flex md:px-0 px-4">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl inter-heading">
              OpenChat
            </h1>
            <p className="text-white my-3">
              If you are new here, then please register in OpenChat.
            </p>
            <Link
              to="/create-new-account"
              type="submit"
              className="btn capitalize"
            >
              Register
            </Link>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div className="bg-white border max-w-sm w-full p-5 rounded-md drop-shadow-lg">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn btn-primary capitalize text-white w-full my-3"
              />
            </form>
            <Link
              to="/password-recovery"
              className="text-sm link hover:text-primary"
            >
              Forgot Password ?
            </Link>
            <div className="divider">OR</div>
            <button className="btn btn-outline capitalize w-full">
              <FcGoogle className="text-xl" /> Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
