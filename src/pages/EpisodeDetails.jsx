import { useContext } from "react";
import { loadingContext } from "../contexts/loading-context";
import PageBase from "./PageBase";
import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";
import PodcastInfo from "../components/PodcastInfo";
import Episode from "../components/Episode";
import styles from "./podcast.module.css";

export default function EpisodeDetails() {
  const ctx = useContext(loadingContext);
  const { podcastId, episodeId } = useParams();
  const { podcasts: podcast } = usePodcast(podcastId);
  const episode =
    podcast.episodes &&
    podcast.episodes.filter((e) => {
      return e.id.toString() === episodeId;
    });

  if (podcast.length === 0 && !ctx.isLoading) {
    return <p>Podcast not found.</p>;
  }

  return (
    <PageBase>
      {!ctx.isLoading ? (
        <main className={styles.container}>
          <PodcastInfo {...podcast} />
          <Episode {...episode[0]} />
        </main>
      ) : (
        ""
      )}
    </PageBase>
  );
}
