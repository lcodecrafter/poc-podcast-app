import usePodcasts from "../hooks/usePodcast";
import PodcastList from "../components/PodcastsList";
import styles from "./home.module.css";
import PodcastFilter from "../components/PodcastFilter";

function Home() {
  const { podcasts, setPodcasts, refreshPodcasts } = usePodcasts();
  const filterPodcastHandler = (filteredPodcasts) => {
    if (filteredPodcasts.length === 0) {
      refreshPodcasts();
      return;
    }

    setPodcasts(filteredPodcasts[0] === -1 ? [] : filteredPodcasts);
  };

  return (
    <main className={styles.container}>
      <PodcastFilter
        podcasts={podcasts}
        onFilterPodcasts={filterPodcastHandler}
      />
      <PodcastList podcasts={podcasts} />
    </main>
  );
}

export default Home;
