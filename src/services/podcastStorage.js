const KEY = "podcasts";
const EXPIRATION_KEY = "podcastsExpiration";

const savePodcasts = (podcasts) => {
  localStorage.setItem(KEY, JSON.stringify(podcasts));
  localStorage.setItem(EXPIRATION_KEY, new Date().getTime().toString());
};

const getPodcasts = () => {
  const serializedPodcasts = localStorage.getItem(KEY);
  if (serializedPodcasts) {
    return JSON.parse(serializedPodcasts);
  }
  return null;
};

// Check if a day has passed since the last storage of podcasts
const hasOneDayPassed = () => {
  const storedTime = localStorage.getItem(EXPIRATION_KEY);
  if (storedTime) {
    const currentTime = new Date().getTime();
    const storedTimestamp = parseInt(storedTime);
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return currentTime - storedTimestamp >= twentyFourHours;
  }
  return false;
};

const arePodcastsStored = () => {
  const serializedPodcasts = localStorage.getItem(KEY);
  return serializedPodcasts !== null;
};

export default {
  savePodcasts,
  getPodcasts,
  hasOneDayPassed,
  arePodcastsStored,
};
