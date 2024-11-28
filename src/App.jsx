import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Link from "./pages/Link";
import RedirectLink from "./pages/RedirectLink";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
