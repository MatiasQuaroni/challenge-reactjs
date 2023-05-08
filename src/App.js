import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="App" style={{ backgroundcolor: "black" }}>
      <Header />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
