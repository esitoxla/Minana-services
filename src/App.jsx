import "./App.css";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutTeam from "./components/AboutTeam";
import AboutLayout from "./pages/AboutLayout";
import AboutCoconut from "./components/AboutCoconut";
import AboutKernel from "./components/AboutKernel";
import AboutPalm from "./components/AboutPalm";
import AboutPage from "./pages/AboutPage";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart"
import CartLayout from "./pages/CartLayout";
import Checkout from "./components/Checkout";
import PaymentSuccess from "./components/PaymentSuccess";
import AdminRoute from "./components/AdminRoute";
import AdminAccess from "./pages/AdminAccess";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "about",
          Component: AboutLayout,
          children: [
            {
              index: true,
              Component: AboutPage,
            },
            {
              path: "team",
              Component: AboutTeam,
            },
            {
              path: "palm",
              Component: AboutPalm,
            },
            {
              path: "coconut",
              Component: AboutCoconut,
            },
            {
              path: "kernel",
              Component: AboutKernel,
            },
          ],
        },
        {
          path: "product",
          Component: ProductPage,
        },
        {
          path: "gallery",
          Component: Gallery,
        },
        {
          path: "testimonial",
          Component: Testimonials,
        },
        {
          path: "contact",
          Component: Contact,
        },
        {
          path: "cart",
          Component: CartLayout,
          children: [
            {
              index: true,
              Component: Cart,
            },
            {
              path: "checkout",
              Component: Checkout,
            },
            {
              path: "payment",
              Component: PaymentSuccess,
            },
          ],
        },
        {
          path: "/admin-access",
          Component: AdminAccess,
        },
        {
          path: "/admin",
          Component: () => (
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>

}

export default App;
