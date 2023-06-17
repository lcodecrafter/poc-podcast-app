import PropTypes from "prop-types";
import PodcastItem from "./PodcastItem";
import "./podcastList.module.css";

export default function PodcastList({ podcasts }) {
  if (podcasts.length === 0) return <span>No results...</span>;

  return (
    <div>
      <ul className=''>
        {podcasts.map((p) => (
          <PodcastItem key={p.id} {...p} />
        ))}
      </ul>
    </div>
  );
}

PodcastList.propTypes = {
  podcasts: PropTypes.array.isRequired,
};
