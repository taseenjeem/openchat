/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app from "../authentication/firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./Loading";

const RequireAuth = ({ children }) => {
  const auth = getAuth(app);
  const location = useLocation();

  // Initialize loading state
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Check user's authentication status
  useEffect(() => {
    const authenticationCheck = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return authenticationCheck;
  }, [auth]);

  if (loading) {
    // Display a loading screen while checking authentication
    return <Loading />;
  }

  if (!user) {
    // If the user is not authenticated, redirect to the login page with the original location as state
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need to login first",
      showConfirmButton: false,
      timer: 2000,
    });
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default RequireAuth;
