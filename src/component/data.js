import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MovieCard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch(
  //           "https://api.gameofthronesquotes.xyz/v1/houses"
  //         );
  //         const data = await response.json();
  //         setData(data);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchData();
  //   }, []);
  const [movie, setMovie] = useState();

  const dispatch = useDispatch();
  const movieRedux = useSelector((state) => state.movie);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id}>
            <h3>{movieRedux.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
}
