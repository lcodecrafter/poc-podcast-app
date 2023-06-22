import PropTypes from "prop-types";
import styles from "./podcastInfo.module.css";
import { Link } from "react-router-dom";

export default function PodcastInfo({
  id,
  imageUrl,
  title,
  author,
  description,
}) {
  return (
    <article className={styles.podcastInfo}>
      <div className={styles.imageContainer}>
        <Link to={`/podcast/${id}`}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.titleContainer}>
        <b>
          <Link to={`/podcast/${id}`} className={styles.link}>
            {title}
          </Link>
        </b>
        <br />
        <Link to={`/podcast/${id}`} className={styles.link}>
          by {author}
        </Link>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.descriptionContainer}>
        <span>
          <b>Description</b>
        </span>
        <br />
        <span>
          <i>{description}</i>
        </span>
      </div>
    </article>
  );
}

PodcastInfo.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
