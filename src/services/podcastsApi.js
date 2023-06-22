import { convertMillisecondsToHMS, formatDate } from "../utils/helpers";

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
  const url = `${API_PODCAST}${podcastId}&media=podcast&entity=podcastEpisode&limit=100`;
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  );
  if (!response.ok) {
    console.error(`Error requesting Podcast with id ${podcastId}.`);
    return;
  }

  // The API returns a .txt file with the json inside.
  const responseText = await response.json();

  const { results: podcast } = JSON.parse(responseText.contents);

  const episodes = podcast.slice(1).map((e) => ({
    id: e.trackId,
    title: e.trackName,
    description: e.description,
    date: formatDate(e.releaseDate),
    duration: convertMillisecondsToHMS(e.trackTimeMillis),
    track: e.episodeUrl,
  }));

  const noDescription =
    "As the description field is not coming in the response I have to fill the space with this text.";

  return {
    id: podcast[0].trackId,
    title: podcast[0].trackName,
    description: podcast[0].shortDescription || noDescription,
    author: podcast[0].artistName,
    imageUrl: podcast[0].artworkUrl100,
    episodes: episodes,
  };
};

export default {
  getPodcasts,
  getPodcast,
};
