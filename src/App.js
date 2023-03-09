import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "/images/sneakers/1.png",
    price: "12 999",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    imageUrl: "/images/sneakers/2.png",
    price: "12 999",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "/images/sneakers/3.png",
    price: "8 499",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    imageUrl: "/images/sneakers/4.png",
    price: "8 999",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="content">
        <div className="search-container">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/images/search.svg" alt="Search icon" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              imageUrl={obj.imageUrl}
              price={obj.price}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
