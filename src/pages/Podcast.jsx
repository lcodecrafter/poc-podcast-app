import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";
import PodcastInfo from "../components/PodcastInfo";
import Episodes from "../components/Episodes";
import styles from "./podcast.module.css";

export default function Podcast() {
  const { podcastId } = useParams();
  const { podcasts } = usePodcast(podcastId);

  if (podcasts.length === 0) {
    return <p>Podcast not found.</p>;
  }

  return (
    <main className={styles.container}>
      <PodcastInfo {...podcasts} />
      <Episodes episodes={podcasts.episodes} podcastId={podcastId} />
    </main>
  );
}
