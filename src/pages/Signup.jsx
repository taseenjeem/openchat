import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  // terms checkbox
  const [check, setCheck] = useState(false);

  return (
    <>
      <div className="h-screen md:flex md:px-0 px-4">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl inter-heading">
              OpenChat
            </h1>
            <p className="text-white my-3">
              Already have an account? Then please login.
            </p>
            <Link to="/login" className="btn capitalize">
              Login
            </Link>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div className="bg-white border max-w-2xl w-full p-5 rounded-md drop-shadow-lg">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Welcome to OpenChat!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Please fill the form for registration.
            </p>
            <form>
              <div className="md:flex items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="md:flex items-center gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Confirm Your Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex items-center text-base w-full my-3">
                <input
                  type="checkbox"
                  onClick={() => setCheck(!check)}
                  className="checkbox checkbox-primary mr-3"
                />
                <span>
                  Accept our{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="link font-bold ml-1"
                  >
                    Terms and Conditions
                  </Link>
                </span>
              </div>
              <input
                type="submit"
                value="Create New Account"
                className={
                  check
                    ? "btn btn-primary capitalize text-white w-full my-3"
                    : "btn-disabled btn btn-primary capitalize text-white w-full my-3"
                }
              />
            </form>
            <div className="divider">OR</div>
            <button className="btn btn-outline capitalize w-full">
              <FcGoogle className="text-xl" /> Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
