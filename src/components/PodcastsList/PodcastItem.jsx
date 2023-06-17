import PropTypes from "prop-types";
import styles from "./podcastItem.module.css";

export default function PodcastItem({ imageUrl, title, author }) {
  return (
    <li className={styles.podcast}>
      <div className={styles.imageUrl}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <br />
        <span className={styles.author}>{author}</span>
      </div>
    </li>
  );
}

PodcastItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
