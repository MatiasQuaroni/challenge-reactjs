import React from "react";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";
import Character from "../components/Character";
import { useEffect, useState } from "react";

const CharacterList = () => {
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
    <div class="container">
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <Loading />}
        {characters?.map((char) => (
          <div
            className="card"
            style={{ marginBottom: 2 + "rem", border: 0 }}
            key={char.id}
          >
            <Character
              id={char.id}
              name={char.name}
              gender={char.gender}
              height={char.height}
            />
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginTop: 0.2 + "rem" }}
              onClick={(e) => deleteCharacter(char.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
