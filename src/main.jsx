import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./Pages/HomePage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import CheckoutPage from "./Pages/CheckOutPage.jsx";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { CartProvider } from "./context/CartContext.jsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/product/:productSlug",
        element: <ProductDetailPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ConvexProvider>
  </StrictMode>
);
