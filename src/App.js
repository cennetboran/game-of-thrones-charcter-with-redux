import * as React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Characters from "./component/got/character/characters";
import Got from "./component/got/got";
import House from "./component/got/house/house";
import HomePage from "./component/homepage/homepage";
import Hp from "./component/hp/hp";
import store from "./redux/store";
import Root from "./Root";
import Spells from "./component/hp/spells/spells";
import AllCharacter from "./component/hp/character/AllCharacter";

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
      {
        path: "allCharacter",
        element: <AllCharacter />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "spells",
        element: <Spells />,
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
