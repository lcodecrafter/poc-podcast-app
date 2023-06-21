import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";
import PodcastInfo from "../components/PodcastInfo";

export default function Podcast() {
  const { podcastId } = useParams();
  const { podcasts } = usePodcast(podcastId);

  if (podcasts.length === 0) {
    return <p>Podcast not found.</p>;
  }

  return (
    <main>
      <PodcastInfo {...podcasts} />
    </main>
  );
}
