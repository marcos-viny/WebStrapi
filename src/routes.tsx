import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const LayoutMain = lazy(() => import("./layouts/LayoutMain"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Login = lazy(() => import("./pages/Login/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);


export default function Routes() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Carregando...</div>}
    />
  )
}