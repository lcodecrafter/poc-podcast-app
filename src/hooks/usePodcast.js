import { useEffect, useState } from "react";
import podcastsApi from "../services/podcastsApi";
import storage from "../services/podcastStorage";

export default function usePodcasts() {
  const [podCasts, setPodcasts] = useState([]);

  useEffect(() => {
    if (storage.arePodcastsStored() && !storage.hasOneDayPassed()) {
      setPodcasts(storage.getPodcasts);
    } else {
      podcastsApi.getPodcasts().then((res) => {
        setPodcasts(res);
        storage.savePodcasts(res);
      });
    }
  }, []);

  return [podCasts];
}
