import React , {lazy , Suspense} from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
const Portfolio = lazy(()=> import("./pages/Portfolio"))
import Spinner from "./components/Spinner";
import HomePage from "./pages/HomePage";
import ScrollToTopButton from "./components/ScrollToTop";



// Layout component with Header and Footer
const Layout = () => (
  <>
  
 

    <Outlet />
  
    <Footer />
    <ScrollToTopButton />
  </>
);

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <HomePage /> }, 
      { path: "/about", element: <AboutUs /> }, 
      { path: "/contact", element: <ContactUs /> }, 
      { path: "/portfolio", element: (<Suspense fallback={<Spinner />} >
         <Portfolio />
      </Suspense>
      )
       }, // Contact page route
      // Add more routes as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
