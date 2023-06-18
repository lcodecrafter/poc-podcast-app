import { useParams } from "react-router-dom";
import usePodcast from "../hooks/usePodcast";

export default function Podcast() {
  const { podcastId } = useParams();
  const { podcasts } = usePodcast(podcastId);
  console.log(podcasts);

  return <main>Podcast</main>;
}
