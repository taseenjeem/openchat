import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import app from "../authentication/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const Signup = () => {
  // terms checkbox
  const [check, setCheck] = useState(false);

  // Navigate after registration
  const navigate = useNavigate();

  // Loading state
  const [loading, setLoading] = useState(false);

  // Imported the auth from firebase.init.js
  const auth = getAuth(app);

  // Sign up with google
  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Account created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You closed the pop up",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Handle sign up form
  const handleSignUp = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Start loading
    setLoading(true);

    if (userPassword === confirmPassword) {
      try {
        // Create a new user account with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);

        // Update the user's displayName
        await updateProfile(user, {
          displayName: userName,
        });

        // Display a success message to the user
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Account created successfully. Check your email for verification.",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the form
        e.target.reset();
      } catch (error) {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          // Handle the case where the email is already in use
          Swal.fire({
            position: "center",
            icon: "error",
            title: "This email is already in use. Try with a different email",
            showConfirmButton: true,
          });
          e.target.reset();
        } else if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          // Handle the case where the password is too weak
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Password should be at least 6 characters",
            showConfirmButton: true,
          });
          e.target.reset();
        } else {
          // Log other errors to the console
          console.log(error);
        }
      } finally {
        // Stop loading, whether sign up succeeds or fails
        setLoading(false);
        // Finally navigate to conversation route after successful registration
        navigate("/conversations");
      }
    } else {
      // Handle the case where the passwords do not match
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your password did not match. Please try again",
        showConfirmButton: true,
      });

      // Stop loading
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
              <form onSubmit={handleSignUp}>
                <div className="md:flex items-center gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full my-3">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      required
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
                      name="userPassword"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full my-3">
                    <label className="label">
                      <span className="label-text">Confirm Your Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      required
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
              <button
                onClick={handleGoogleSignUp}
                className="btn btn-outline capitalize w-full"
              >
                <FcGoogle className="text-xl" /> Sign up with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
