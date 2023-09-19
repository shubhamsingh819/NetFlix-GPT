import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-86">
      <div>
        <MovieList title={movieNames} movies={movieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
