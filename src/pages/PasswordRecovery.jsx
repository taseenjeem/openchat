import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../authentication/firebase.init";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const PasswordRecovery = () => {
  // Import app from firebase.init.js
  const auth = getAuth(app);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle reset password form
  const handleResetPass = async (e) => {
    e.preventDefault();

    // Extract user's email from the form
    const userEmail = e.target.userEmail.value;

    // Start loading
    setLoading(true);

    try {
      // Send a password reset email to the user's email address
      await sendPasswordResetEmail(auth, userEmail);

      // Password reset email sent successfully
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email has been sent. Please reset your password",
        showConfirmButton: true,
      });

      // Reset the form
      e.target.reset();
    } catch (error) {
      console.log(error);

      // Handle any errors that may occur during the password reset process
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong. Please try again later",
        showConfirmButton: true,
      });
    } finally {
      // Stop loading, whether password reset succeeds or fails
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen md:flex md:px-0 px-4">
          <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
            <div>
              <h1 className="text-white font-bold text-4xl inter-heading">
                OpenChat
              </h1>
              <p className="text-white my-3">
                Recovered your password? Now please try to login.
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
            <div className="bg-white border max-w-sm w-full p-5 rounded-md drop-shadow-lg">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Having Trouble in login?
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Please recover your password.
              </p>
              <form onSubmit={handleResetPass}>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Your Existing Email</span>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Reset Your Password"
                  className="btn btn-primary capitalize text-white w-full"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordRecovery;
