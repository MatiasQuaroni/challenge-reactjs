import { useState, useEffect } from "react";
import "./App.css";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.results.map(({ name, gender, birth_year }) => ({
            name,
            gender,
            birth_year,
          }))
        )
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
