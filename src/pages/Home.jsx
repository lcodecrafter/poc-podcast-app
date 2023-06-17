import usePodcasts from "../hooks/usePodcast";
import PodcastList from "../components/PodcastsList";
import styles from "./home.module.css";

function Home() {
  const [podcasts] = usePodcasts();

  return (
    <main className={styles.container}>
      <PodcastList podcasts={podcasts} />
    </main>
  );
}

export default Home;
