import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import PasswordRecovery from "./pages/PasswordRecovery.jsx";
import Loading from "./components/Loading";
import Conversations from "./pages/Conversations";
import ChatLayout from "./components/ChatLayout";
import RequireAuth from "./authentication/RequireAuth";

// Configure the react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-new-account",
    element: <Signup />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/conversations",
    element: (
      <RequireAuth>
        <Conversations />
      </RequireAuth>
    ),
    children: [
      {
        path: "/conversations",
        element: <ChatLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <Loading />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
