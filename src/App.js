import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://640c96d8a3e07380e8f84539.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://640c96d8a3e07380e8f84539.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToFavorite = (obj) => {
    axios.post("https://640c96d8a3e07380e8f84539.mockapi.io/cart", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://640c96d8a3e07380e8f84539.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToCart = (obj) => {
    axios.post("https://640c96d8a3e07380e8f84539.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  //создадим метод, чтобы вытащить значения из инпута
  const searchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : (
        ""
      )}
      <Header onCartClick={() => setCartOpened(true)} />
      <main className="content">
        <div className="search-container">
          <h1>
            {searchValue
              ? `Поиск по запросу: '${searchValue}'`
              : `Все кроссовки`}
          </h1>
          <div className="search-block">
            <img src="/images/search.svg" alt="Search icon" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/images/btn-remove.svg"
                alt="Button clear"
              />
            )}
            <input
              value={searchValue}
              onChange={searchInput}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
