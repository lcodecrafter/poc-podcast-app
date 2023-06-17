const API_PODCASTS =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const API_PODCAST = "https://itunes.apple.com/lookup?id=";

const getPodcasts = async () => {
  const response = await fetch(`${API_PODCASTS}`);
  if (!response.ok) {
    console.error("Error requesting Podcasts.");
    return;
  }

  const {
    feed: { entry: podcasts },
  } = await response.json();

  // transform all the podcast to have a better API contract, so that if API change, no modifications are needed.
  return podcasts.map((p) => ({
    id: p.id.attributes["im:id"],
    title: p.title.label,
    author: p["im:artist"].label,
    imageUrl: p["im:image"][1].label,
  }));
};

const getPodcast = async (podcastId) => {
  const response = await fetch(`${API_PODCAST}${podcastId}`);
  if (!response.ok) {
    console.error(`Error requesting Podcast with id ${podcastId}.`);
    return;
  }

  const { results: podcast } = await response.json();

  return podcast[0];
};

export default {
  getPodcasts,
  getPodcast,
};
