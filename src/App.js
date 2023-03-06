function App() {
  return (
    <div className="wrapper">
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
          <li>
            <img width={18} height={18} src="/images/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/images/like.svg"
              alt="User like"
            />
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
      <main className="content">
        <h1>Все кроссовки</h1>

        <div className="sneakers">
          <div className="card">
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
                <img
                  width={11}
                  height={11}
                  src="/images/plus.svg"
                  alt="Add button"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="/images/sneakers/2.png"
              alt="Sheakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/images/plus.svg"
                  alt="Add button"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="/images/sneakers/3.png"
              alt="Sheakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/images/plus.svg"
                  alt="Add button"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={122}
              src="/images/sneakers/4.png"
              alt="Sheakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardBottom">
              <div>
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="/images/plus.svg"
                  alt="Add button"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
