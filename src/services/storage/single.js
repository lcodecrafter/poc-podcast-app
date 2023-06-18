const PODCASTS_SINGLES = "podcasts";

const savePodcast = (podcast) => {
  const podcasts = getPodcasts();

  podcasts[podcast.id] = podcast;
  podcasts[podcast.id].expiration = new Date().getTime().toString();

  localStorage.setItem(PODCASTS_SINGLES, JSON.stringify(podcasts));
};

const getPodcasts = () => {
  const serializedPodcasts = localStorage.getItem(PODCASTS_SINGLES);
  if (serializedPodcasts) {
    return JSON.parse(serializedPodcasts);
  }
  return {};
};
const getPodcast = (podcastId) => {
  const podcasts = getPodcasts();
  return Object.keys(podcasts).length > 0 && podcasts[podcastId]
    ? podcasts[podcastId]
    : null;
};

// Check if a day has passed since the last storage of podcast
const hasOneDayPassed = (podcastId) => {
  const storedTime = getPodcasts()[podcastId].expiration;
  const currentTime = new Date().getTime();
  const storedTimestamp = parseInt(storedTime);
  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  return currentTime - storedTimestamp >= twentyFourHours;
};

const isPodcastsStored = (podcastId) => {
  const podcast = getPodcast(podcastId);
  return podcast ? true : false;
};

export default {
  savePodcast,
  getPodcast,
  hasOneDayPassed,
  isPodcastsStored,
};
