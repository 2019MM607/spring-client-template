import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Client, ClientDetails, City, CityDetails } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/clients",
    element: <Client />,
  },
  {
    path: "/clients/:id",
    element: <ClientDetails />,
  },

  {
    path: "/city",
    element: <City />,
  },
  {
    path: "/city/:id",
    element: <CityDetails />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
