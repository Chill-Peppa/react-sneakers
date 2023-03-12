import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://640c96d8a3e07380e8f84539.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  //вместо setCartItems([...cartItems, obj]);
  //лучше использовать анонимную функцию с prev.
  //prev - предыдущее значение. Чтобы случайно не получить устаревшие данные
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : (
        ""
      )}
      <Header onCartClick={() => setCartOpened(true)} />
      <main className="content">
        <div className="search-container">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/images/search.svg" alt="Search icon" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
