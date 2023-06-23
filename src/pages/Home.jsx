import { useContext } from "react";
import { loadingContext } from "../contexts/loading-context";
import PageBase from "./PageBase";
import usePodcasts from "../hooks/usePodcast";
import PodcastList from "../components/PodcastsList";
import styles from "./home.module.css";
import PodcastFilter from "../components/PodcastFilter";

function Home() {
  const { podcasts, filteredPodcasts, filterPodcasts } = usePodcasts();
  const ctx = useContext(loadingContext);
  const podcastList = filteredPodcasts.length > 0 ? filteredPodcasts : podcasts;

  return (
    <PageBase>
      {!ctx.isLoading ? (
        <main className={styles.container}>
          <PodcastFilter
            podcastLength={filteredPodcasts.length || podcasts.length}
            onFilterPodcasts={filterPodcasts}
          />
          <PodcastList podcasts={podcastList} />
        </main>
      ) : (
        ""
      )}
    </PageBase>
  );
}

export default Home;
