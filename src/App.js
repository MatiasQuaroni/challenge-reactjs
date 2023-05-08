import "./App.css";
import { useFetch } from "./useFetch";

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
          {data?.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
