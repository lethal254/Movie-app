import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import movieListStyles from "./MovieList.module.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=136a9d1a0136846fbc4f7b2a33a6a66a"
    )
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        if (!searchTerm) {
          setMovies(data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=136a9d1a0136846fbc4f7b2a33a6a66a&language=en-US&query=${searchTerm}&page=1&include_adult=true`
    )
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        if (searchTerm) {
          setMovies(data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(searchInput);
          setSearchInput("");
        }}
        className={movieListStyles.searchForm}>
        <input
          className={movieListStyles.textInput}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}></input>
        <button className={movieListStyles.btn} type="submit">
          🔍
        </button>
      </form>
      <div className={movieListStyles.movieList}>
        {movies.map((movie) => {
          if (movie.poster_path) {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                imageUrl={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                description={movie.overview}
                rating={movie.vote_average}
              />
            );
          }
        })}
      </div>
      {console.log(searchTerm)}
    </div>
  );
}

export default MoviesList;
