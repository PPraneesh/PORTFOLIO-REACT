import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Root from "./Root";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Blogs from "./components/Blogs";

export default function App() {
  const [route, setRoute] = useState({
    loc: "C:\\home>",
    theme: "yellow",
  });
  let BrowserRouter = createBrowserRouter([
    {
      path: "",
      element: <Root route={route} setRoute={setRoute} />,
      children: [
        {
          path: "",
          element: <Home route={route} />,
        },
        {
          path: "about",
          element: <About route={route} />,
        },
        {
          path: "projects",
          element: <Projects route={route} />,
        },
        {
          path: "blogs",
          element: <Blogs route={route} />,
        },
        {
          path: "resume",
          element: <Resume route={route} />,
        }
      ],
    },
  ]);
  return <RouterProvider router={BrowserRouter} />;
}
