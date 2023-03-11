import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div class={styles.favorite} onClick={props.onFavorite}>
        <img src="/images/heart-unliked.svg" alt="Unliked button" />
      </div>
      <img width={133} height={122} src={props.imageUrl} alt="Sheakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
