import React from "react";

function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <div>
          <div className="cartHeader">
            <h2>Корзина</h2>
            <img
              className="removeButton"
              src="/images/btn-remove.svg"
              alt="Button delete"
            />
          </div>
          <div className="items">
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/images/sneakers/1.png"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeButton"
                src="/images/btn-remove.svg"
                alt="Button delete"
              />
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/images/sneakers/1.png"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeButton"
                src="/images/btn-remove.svg"
                alt="Button delete"
              />
            </div>
            <div className="cartItem">
              <img
                width={70}
                height={70}
                src="/images/sneakers/1.png"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeButton"
                src="/images/btn-remove.svg"
                alt="Button delete"
              />
            </div>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/images/btn-next.svg" alt="Next arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
