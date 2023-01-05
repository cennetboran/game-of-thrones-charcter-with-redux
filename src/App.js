import * as React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Got from "./component/got/got";
import House from "./component/got/house";
import HomePage from "./component/homepage/homepage";
import Hp from "./component/hp/hp";
import store from "./redux/store";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "got",
        element: <Got />,
      },
      {
        path: "hp",
        element: <Hp />,
      },
      {
        path: "house",
        element: <House />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
