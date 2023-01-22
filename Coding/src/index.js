import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
//lazy loading
const About = React.lazy(() => import("./components/About"));
const Instamart = React.lazy(() => import("./components/Instamart"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/about",
        element: (
          <React.Suspense fallback="<h2>loading...</h2>">
            <About />
          </React.Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/instamart",
        element: (
          <React.Suspense fallback={<Shimmer />}>
            <Instamart />
          </React.Suspense>
        ),
      },
      { path: "/restuarant/:id", element: <ResturantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
