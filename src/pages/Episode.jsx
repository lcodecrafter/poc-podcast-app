import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";
import PodcastInfo from "../components/PodcastInfo";
import Episode from "../components/EpisodeDetails";
import styles from "./podcast.module.css";

export default function EpisodeDetails() {
  const { podcastId } = useParams();
  const { podcasts: podcast } = usePodcast(podcastId);

  if (podcast.length === 0) {
    return <p>Podcast not found.</p>;
  }

  return (
    <main className={styles.container}>
      <PodcastInfo {...podcast} />
      <Episode />
    </main>
  );
}
