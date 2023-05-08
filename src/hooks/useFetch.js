import { useState, useEffect } from "react";

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
          data.results.map((char) => ({
            id: Number(char.url.split("/").filter(Boolean).pop()),
            name: char.name,
            gender: char.gender,
            height: char.height,
          }))
        )
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
