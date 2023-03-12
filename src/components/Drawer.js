import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div>
          <div className="cartHeader">
            <h2>Корзина</h2>
            <img
              onClick={onClose}
              className="removeButton"
              src="/images/btn-remove.svg"
              alt="Button delete"
            />
          </div>

          {items.length > 0 ? (
            <div>
              <div className="items">
                {items.map((obj) => (
                  <div className="cartItem">
                    <img
                      width={70}
                      height={70}
                      src={obj.imageUrl}
                      alt="Sneakers"
                    />
                    <div>
                      <p>{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      className="removeButton"
                      src="/images/btn-remove.svg"
                      alt="Button delete"
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                ))}
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
          ) : (
            <div className="cartEmpty">
              <img
                className="emptyBox"
                width="120px"
                height="120px"
                src="/images/empty-cart.png"
                alt="Empty box"
              />
              <h2>Корзина пустая</h2>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="greenButton">
                <img src="/images/btn-back.svg" alt="Back arrow" />
                Вернуться назад
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
