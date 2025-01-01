import { createBrowserRouter } from "react-router-dom";
// Layout imports
import { Layout } from "@/components/layout/layout";

// Pages imports
import { HomePage } from "@/pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
