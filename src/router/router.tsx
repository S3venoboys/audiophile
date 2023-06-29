import { createBrowserRouter } from "react-router-dom";
import Home from "../view/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
