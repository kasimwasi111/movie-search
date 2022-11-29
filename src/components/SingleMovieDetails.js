import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_Url } from "./context";

const SingleMovieDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_Url}&i=${id}`);
    }, 400);
    return () => clearTimeout(timeOut);
  }, [id]);
  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loadin.....</div>
      </div>
    );
  }
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} />
        </figure>
        <div className="card-content">
          <p className="card-text">{movie.title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovieDetails;
