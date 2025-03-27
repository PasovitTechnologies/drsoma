import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Editorial from "./pages/Editorial";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import General from "./pages/General";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contacts />,
        },
        {
          path: "/contact-3",
          element: <Contact />,
        },
        {
          path: "/editorial",
          element: <Editorial />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
        {
          path: "/general",
          element: <General />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
