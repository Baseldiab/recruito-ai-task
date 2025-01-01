import { createBrowserRouter } from "react-router-dom";
// Layout imports
import { Layout } from "@/components/layout/layout";

// Pages imports
import ErrorElementPage from "@/pages/errorPage";
import { HomePage } from "@/pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElementPage />,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
