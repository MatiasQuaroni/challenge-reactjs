import "./App.css";
import { useFetch } from "./hooks/useFetch";
import Character from "./components/Character";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/?page=1"
  );

  useEffect(() => {
    setCharacters(data);
  }, data);

  const deleteCharacter = (charId) => {
    setCharacters((chars) => {
      return chars.filter((i) => i.id !== charId);
    });
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {characters?.map((char) => (
            <div className="card" key={char.id}>
              <Character
                id={char.id}
                name={char.name}
                gender={char.gender}
                height={char.height}
              />
              <button onClick={(e) => deleteCharacter(char.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
