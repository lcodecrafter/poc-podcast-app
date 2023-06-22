import PropTypes from "prop-types";
import styles from "./podcastInfo.module.css";

export default function PodcastInfo({ imageUrl, title, author, description }) {
  return (
    <article className={styles.podcastInfo}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.separator}></div>
      <div className={styles.titleContainer}>
        <span>
          <b>{title}</b>
        </span>
        <br />
        <span>by {author}</span>
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
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
