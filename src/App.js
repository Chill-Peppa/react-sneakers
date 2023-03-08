import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
