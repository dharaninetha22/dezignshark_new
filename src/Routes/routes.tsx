import { createBrowserRouter, Navigate } from "react-router-dom";
// import { Dashboard, NotFound, About, Gallery, ContactUs, Blog, GraphicDesigning, WebDevelopment, Branding, SEO, SMM, PPC, CardData, DigitalMarketing } from "../Pages/Exports/Exports";
import Layout from "../LayoutTwo/Layout";
import { NotFound } from "../Pages/Exports/Exports";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Careers from "../Pages/Careers";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import BlogContent from "../Pages/Blog/BlogDetails/BlogContent";
import Contact from "../Pages/Contact";
import PopUpHeader from "../Pages/PopUpHeader";
import JobDetails from "../Pages/Careers/JobDetails";









const router = createBrowserRouter([
  {
    element: <Layout />,
    // element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      // {
      //   path: "/services/digital",
      //   element: <ServicesDetails/>,
      // },
      {
        path: "/services/:serviceId",
        element: <ServicesDetails/>,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/blog/:title",
        element: <BlogContent/>,
      },
      {
        path: "/contactus",
        element: <Contact/>,
      },

      
      
      

     
      

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
