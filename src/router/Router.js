import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Home from "../components/home/home-index/Home";
import New from "../components/news/New";
import Services from "../components/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/news", element: <New /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
