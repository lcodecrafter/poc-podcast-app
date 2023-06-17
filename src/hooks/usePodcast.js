import { useEffect, useState } from "react";
import podcastsApi from "../services/podcastsApi";

export default function usePodcasts() {
  const [podCasts, setPodcasts] = useState([]);

  useEffect(() => {
    podcastsApi.getPodcasts().then((res) => {
      setPodcasts(res);
    });
  }, []);

  return [podCasts];
}
