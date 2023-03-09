import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div class={styles.favorite}>
        <img src="/images/heart-unliked.svg" alt="Unliked button" />
      </div>
      <img width={133} height={122} src={props.imageUrl} alt="Sheakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={props.onClick}>
          <img width={11} height={11} src="/images/plus.svg" alt="Add button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
