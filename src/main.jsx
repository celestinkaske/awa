import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Day from "./pages/Day";
import Analysis from "./pages/Analysis";
import Sounds from "./pages/Sounds";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     // children: [
//     //   {
//     //     path: "contacts/:contactId",
//     //     element: <Contact />,
//     //   },
//     // ],
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/Analysis",
        element: <Analysis />,
      },
      {
        path: "/Sounds",
        element: <Sounds />,
      },
      {
        path: "/day/:dayId",
        element: <Day />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
