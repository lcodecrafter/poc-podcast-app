import { useEffect, useState, useCallback } from "react";
import podcastsApi from "../services/podcastsApi";
import storage from "../services/storage/podcastStorage";

export default function usePodcasts(podcastId) {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  const retrievePodcastsCollection = useCallback(() => {
    if (
      storage.collection.arePodcastsStored() &&
      !storage.collection.hasOneDayPassed()
    ) {
      setPodcasts(storage.collection.getPodcasts);
    } else {
      podcastsApi.getPodcasts().then((res) => {
        setPodcasts(res);
        storage.collection.savePodcasts(res);
      });
    }
  }, []);

  const retrievePodcast = useCallback((podcastId) => {
    if (
      storage.single.isPodcastsStored(podcastId) &&
      !storage.single.hasOneDayPassed(podcastId)
    ) {
      setPodcasts(storage.single.getPodcast(podcastId));
    } else {
      podcastsApi.getPodcast(podcastId).then((res) => {
        setPodcasts(res);
        storage.single.savePodcast(res);
      });
    }
  }, []);

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
