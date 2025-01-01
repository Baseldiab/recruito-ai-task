import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
