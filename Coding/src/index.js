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
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Cart from "./components/Cart";
//lazy loading
const About = React.lazy(() => import("./components/About"));
const Instamart = React.lazy(() => import("./components/Instamart"));

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
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
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
