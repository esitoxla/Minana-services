import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const router = createBrowserRouter([

  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: AboutPage
      },
      {
        path: "product",
        Component: ProductPage
      },
      {
        path: "gallery",
        Component: Gallery
      },
      {
        path: "testimonial",
        Component: Testimonials
      },
      {
        path: "contact",
        Component: Contact
      }
    ]
  }
])



function App() {

  return <RouterProvider router={router}/>

}

export default App;
