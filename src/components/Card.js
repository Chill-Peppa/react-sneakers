import React from "react";

function Card() {
  return (
    <div className="card">
      <div class="favorite">
        <img src="/images/heart-unliked.svg" alt="Unliked button" />
      </div>
      <img
        width={133}
        height={122}
        src="/images/sneakers/1.png"
        alt="Sheakers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/images/plus.svg" alt="Add button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
