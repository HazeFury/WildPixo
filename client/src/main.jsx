import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Connexion from "./pages/Connexion/Connexion";
import Profil from "./pages/Profil/Profil";
import NewsById from "./pages/News/NewsById/NewsById";
import GameById from "./pages/Games/GameById/GameById";
import AddNews from "./pages/News/AddNews/AddNews";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/game/:slug",
        element: <GameById />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsById />,
      },
      {
        path: "/news/add",
        element: <AddNews />,
      },
      {
        path: "/news/edit/:id",
        element: <AddNews />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
