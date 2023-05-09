import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterList from "./components/CharacterList";
import Image from "./assets/backgroundImage.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
