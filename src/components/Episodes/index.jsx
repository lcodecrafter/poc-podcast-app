import PropTypes from "react";

export default function Episodes(episodes) {
  return (
    <article>
      <div>Episodes:{episodes.length}</div>
      <div></div>
    </article>
  );
}

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};
