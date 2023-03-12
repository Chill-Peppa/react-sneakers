import React from "react";
import styles from "./Card.module.scss";

function Card({ onFavorite, onPlus, imageUrl, price, title }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, price, title });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ imageUrl, price, title });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={
            isFavorite ? "/images/heart-liked.svg" : "/images/heart-unliked.png"
          }
          alt="Unliked button"
          onClick={onClickFavorite}
        />
      </div>
      <img width={133} height={122} src={imageUrl} alt="Sheakers" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={
            isAdded ? "/images/button-checked.svg" : "/images/button-plus.svg"
          }
          alt="Add button"
        />
      </div>
    </div>
  );
}

export default Card;
