import styles from "./episode.module.css";
import PropTypes from "prop-types";

export default function Episode({ title, description, track }) {
  return (
    <article className={styles.container}>
      <section>
        <h2>{title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, "<br/>"),
          }}
        ></p>
        <audio controls>
          <source src={track} type='audio/mp3' />
          Your browser does not allow audio
        </audio>
      </section>
    </article>
  );
}

Episode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  track: PropTypes.string.isRequired,
};
