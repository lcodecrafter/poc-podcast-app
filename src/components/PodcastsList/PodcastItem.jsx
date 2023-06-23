import Link from "../UI/Link";
import PropTypes from "prop-types";
import styles from "./podcastItem.module.css";

export default function PodcastItem({ imageUrl, title, author, id }) {
  return (
    <li className={styles.podcast}>
      <Link to={`/podcast/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={`${title}`} />
        </div>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <br />
          <span className={styles.author}>{author}</span>
        </div>
      </Link>
    </li>
  );
}

PodcastItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
