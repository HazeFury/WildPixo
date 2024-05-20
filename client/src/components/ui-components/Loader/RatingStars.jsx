import PropTypes from "prop-types";

function RatingStars({ score }) {
  const starformat = score / 10;

  const fillThisStar = (result, number) => {
    if (result > number) {
      return "";
    }
    if (result === number || result > number - 1) {
      return "is-half";
    }
    if (result < number) {
      return "is-transparent";
    }
    return null;
  };
  return (
    <section className="icon-list">
      <i className={`nes-icon is-medium star ${fillThisStar(starformat, 2)}`} />
      <i className={`nes-icon is-medium star ${fillThisStar(starformat, 4)}`} />
      <i className={`nes-icon is-medium star ${fillThisStar(starformat, 6)}`} />
      <i className={`nes-icon is-medium star ${fillThisStar(starformat, 8)}`} />
      <i
        className={`nes-icon is-medium star ${fillThisStar(starformat, 10)}`}
      />
    </section>
  );
}

RatingStars.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RatingStars;
