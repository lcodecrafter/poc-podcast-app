import { useContext } from "react";
import { loadingContext } from "../contexts/loading-context";
import PageBase from "./PageBase";
import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";
import PodcastInfo from "../components/PodcastInfo";
import Episodes from "../components/Episodes";
import styles from "./podcast.module.css";

export default function Podcast() {
  const ctx = useContext(loadingContext);
  const { podcastId } = useParams();
  const { podcasts } = usePodcast(podcastId);

  if (podcasts.length === 0 && !ctx.isLoading) {
    return <p>Podcast not found.</p>;
  }

  return (
    <PageBase>
      {!ctx.isLoading ? (
        <main className={styles.container}>
          <PodcastInfo {...podcasts} />
          <Episodes episodes={podcasts.episodes} podcastId={podcastId} />
        </main>
      ) : (
        ""
      )}
    </PageBase>
  );
}
