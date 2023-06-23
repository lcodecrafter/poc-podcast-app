import { useEffect, useState, useCallback, useContext } from "react";
import podcastsApi from "../services/podcastsApi";
import storage from "../services/storage/podcastStorage";
import { loadingContext } from "../contexts/loading-context";

export default function usePodcasts(podcastId) {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const ctx = useContext(loadingContext);

  const retrievePodcastsCollection = useCallback(() => {
    if (
      storage.collection.arePodcastsStored() &&
      !storage.collection.hasOneDayPassed()
    ) {
      setPodcasts(storage.collection.getPodcasts);
      ctx.loadingHandler(false);
    } else {
      podcastsApi.getPodcasts().then((res) => {
        setPodcasts(res);
        storage.collection.savePodcasts(res);
        ctx.loadingHandler(false);
      });
    }
  }, [ctx]);

  const retrievePodcast = useCallback(
    (podcastId) => {
      if (
        storage.single.isPodcastsStored(podcastId) &&
        !storage.single.hasOneDayPassed(podcastId)
      ) {
        setPodcasts(storage.single.getPodcast(podcastId));
        ctx.loadingHandler(false);
      } else {
        podcastsApi.getPodcast(podcastId).then((res) => {
          setPodcasts(res);
          storage.single.savePodcast(res);
          ctx.loadingHandler(false);
        });
      }
    },
    [ctx]
  );

  const refreshPodcasts = () => {
    retrievePodcastsCollection();
  };

  const filterPodcasts = useCallback(
    (filterText) => {
      if (filterText.trim() === "") {
        setFilteredPodcasts([]);
        return;
      }
      // Filter podcasts by title
      const filterPodcasts = podcasts.filter((podcast) =>
        podcast.title.toLowerCase().includes(filterText.toLowerCase())
      );

      setFilteredPodcasts(filterPodcasts);
    },
    [podcasts]
  );

  useEffect(() => {
    if (podcastId) {
      retrievePodcast(podcastId);
    } else {
      retrievePodcastsCollection();
    }
  }, [retrievePodcastsCollection, retrievePodcast, podcastId]);

  return {
    podcasts,
    setPodcasts,
    refreshPodcasts,
    filterPodcasts,
    filteredPodcasts,
  };
}
