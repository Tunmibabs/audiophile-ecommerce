import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./Pages/HomePage.tsx";
import CategoryPage from "./Pages/CategoryPage.tsx";
import ProductDetailPage from "./Pages/ProductDetailPage.tsx";
import CheckoutPage from "./Pages/CheckOutPage.tsx";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { CartProvider } from "./context/CartContext.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

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
        element: <CheckoutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ConvexProvider>
  </StrictMode>
);
