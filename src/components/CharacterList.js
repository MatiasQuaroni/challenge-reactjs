import React from "react";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";
import Character from "./Character";
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
    <div
      class="container"
      style={{
        minHeight: 100 + "vh",
        minWidth: "100%",
        flexDirection: "column",
      }}
    >
      <section class="mx-auto my-5" style={{ maxWidth: 35 + "rem" }}>
        <div class="row">
          {error && <li>Error: {error}</li>}
          {loading && <Loading />}
          {characters?.map((char) => (
            <div class="col-lg-6 col-md-6 col-sm-6 mb-4">
              <div
                class="card text-white bg-dark h-100 position-relative"
                style={{ marginBottom: 2 + "rem" }}
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
                  class="btn btn-light"
                  style={{ marginTop: 0.2 + "rem" }}
                  onClick={(e) => deleteCharacter(char.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharacterList;
