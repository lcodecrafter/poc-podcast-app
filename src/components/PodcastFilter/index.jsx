import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PodcastFilter.module.css";

export default function PodcastFilter({ podcastLength, onFilterPodcasts }) {
  const [filterText, setFilterText] = useState("");
  const [filterUsed, setFilterUsed] = useState(false); // track if user used the filter

  useEffect(() => {
    if (filterText.trim() !== "") {
      setFilterUsed(true);

      const delayDebounceFn = setTimeout(() => {
        onFilterPodcasts(filterText);
      }, 500);

      return () => {
        clearTimeout(delayDebounceFn);
      };
    } else if (filterUsed) {
      onFilterPodcasts("");
    }
  }, [filterText, filterUsed, onFilterPodcasts]);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.podcastCount}>
        <span>{podcastLength}</span>
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
  podcastLength: PropTypes.number.isRequired,
  onFilterPodcasts: PropTypes.func.isRequired,
};
