import { useEffect, useState, useCallback } from "react";
import podcastsApi from "../services/podcastsApi";
import storage from "../services/podcastStorage";

export default function usePodcasts() {
  const [podcasts, setPodcasts] = useState([]);

  const retrievePodcasts = useCallback(() => {
    if (storage.arePodcastsStored() && !storage.hasOneDayPassed()) {
      setPodcasts(storage.getPodcasts);
    } else {
      podcastsApi.getPodcasts().then((res) => {
        setPodcasts(res);
        storage.savePodcasts(res);
      });
    }
  }, []);

  const refreshPodcasts = () => {
    retrievePodcasts();
  };

  useEffect(() => {
    retrievePodcasts();
  }, [retrievePodcasts]);

  return { podcasts, setPodcasts, refreshPodcasts };
}
