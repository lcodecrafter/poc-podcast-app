import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Podcast from "./pages/Podcast.jsx";
import EpisodeDetails from "./pages/EpisodeDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/podcast/:podcastId",
    element: <Podcast />,
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <EpisodeDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
