import React from "react";
import styles from "./Card.module.scss";

function Card({ onFavorite, onPlus, imageUrl, price, title }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, price, title });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div class={styles.favorite} onClick={onFavorite}>
        <img src="/images/heart-unliked.svg" alt="Unliked button" />
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
