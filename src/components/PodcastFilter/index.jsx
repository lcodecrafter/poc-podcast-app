import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PodcastFilter.module.css";

export default function PodcastFilter({ podcasts, onFilterPodcasts }) {
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (filterText.trim() !== "") {
      const delayDebounceFn = setTimeout(() => {
        // Filter podcasts by title
        const filteredPodcasts = podcasts.filter((podcast) =>
          podcast.title.toLowerCase().includes(filterText.toLowerCase())
        );

        onFilterPodcasts(
          // If the title does not match return an array with -1 to distinguish between not found podcast and reset search
          filteredPodcasts.length === 0 ? [-1] : filteredPodcasts
        );
      }, 500);

      return () => {
        clearTimeout(delayDebounceFn);
      };
    } else {
      onFilterPodcasts([]);
    }
  }, [filterText, podcasts, onFilterPodcasts]);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.podcastCount}>
        <span>{podcasts.length}</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          placeholder='Filter podcasts...'
          value={filterText}
          onChange={handleFilterChange}
        />
      </form>
    </div>
  );
}

PodcastFilter.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterPodcasts: PropTypes.func.isRequired,
};
