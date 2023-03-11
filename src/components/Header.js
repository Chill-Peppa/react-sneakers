import React from "react";

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img
          width={40}
          height={40}
          src="/images/logo.png"
          alt="Logo Sneakers"
        />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onCartClick}>
          <img width={18} height={18} src="/images/cart.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/images/like.svg" alt="User like" />
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/images/user.svg"
            alt="User profile icon"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
