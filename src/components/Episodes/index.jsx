import PropTypes from "prop-types";
import styles from "./episodes.module.css";
import Link from "../UI/Link";

export default function Episodes({ episodes, podcastId }) {
  return (
    <article className={styles.podcastEpisodes}>
      <section className={styles.numberEpisodes}>
        <h2>Episodes:{episodes.length}</h2>
      </section>
      <section className={styles.episodesList}>
        <div className={`${styles.row} ${styles.tHeader}`}>
          <div className={styles.columnTitle}>
            <b>Title</b>
          </div>
          <div>
            <b>Date</b>
          </div>
          <div>
            <b>Duration</b>
          </div>
        </div>
        {episodes.map((e) => (
          <div key={e.id} className={styles.row}>
            <div className={styles.columnTitle}>
              <Link to={`/podcast/${podcastId}/episode/${e.id}`}>
                {e.title}
              </Link>
            </div>
            <div>{e.date}</div>
            <div>{e.duration}</div>
          </div>
        ))}
      </section>
    </article>
  );
}

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
  podcastId: PropTypes.string.isRequired,
};
