import "./App.css";
import { useFetch } from "./hooks/useFetch";
import Character from "./components/Character";

function App() {
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/?page=1"
  );

  return (
    <div className="App">
      <h1>Test</h1>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((char) => (
            <div className="card" key={char.id}>
              <Character
                id={char.id}
                name={char.name}
                gender={char.gender}
                height={char.height}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
