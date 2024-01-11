import PropTypes from "prop-types";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import styles from "./BookCard.module.css";

const BookCard = ({ data, handleLikedList }) => {
  BookCard.propTypes = {
    data: PropTypes.object,
    handleLikedList: PropTypes.func,
  };

  const { title, author, image, language, pages } = data;

  const [like, setLike] = useState(false);

  const src = `/src/assets/${image}`;

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <div>
        <img src={src} alt={title} />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>
            {language} - {pages} pages
          </p>
        </div>
        <div>
          <MdFavorite
            className={styles.likebtn}
            color={like ? "red" : "white"}
            fontSize="1.8rem"
            onClick={likeHandler}
            cursor="pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
