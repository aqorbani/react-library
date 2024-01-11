import PropTypes from "prop-types";
import styles from "./SideCard.module.css";

const SideCard = ({ data: { image, title } }) => {
  SideCard.propTypes = {
    data: PropTypes.object,
  };

  const src = `/src/assets/${image}`;

  return (
    <div className={styles.card}>
      <img src={src} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default SideCard;
