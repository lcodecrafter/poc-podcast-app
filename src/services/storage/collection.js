const PODCAST_COLLECTION = "podcasts_collection";
const EXPIRATION_PODCAST_COLLECTION = "podcastsExpiration";

const savePodcasts = (podcasts) => {
  localStorage.setItem(PODCAST_COLLECTION, JSON.stringify(podcasts));
  localStorage.setItem(
    EXPIRATION_PODCAST_COLLECTION,
    new Date().getTime().toString()
  );
};

const getPodcasts = () => {
  const serializedPodcasts = localStorage.getItem(PODCAST_COLLECTION);
  if (serializedPodcasts) {
    return JSON.parse(serializedPodcasts);
  }
  return null;
};

// Check if a day has passed since the last storage of podcasts
const hasOneDayPassed = () => {
  const storedTime = localStorage.getItem(EXPIRATION_PODCAST_COLLECTION);
  if (storedTime) {
    const currentTime = new Date().getTime();
    const storedTimestamp = parseInt(storedTime);
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return currentTime - storedTimestamp >= twentyFourHours;
  }
  return false;
};

const arePodcastsStored = () => {
  const serializedPodcasts = localStorage.getItem(PODCAST_COLLECTION);
  return serializedPodcasts !== null;
};

export default {
  savePodcasts,
  getPodcasts,
  hasOneDayPassed,
  arePodcastsStored,
};
