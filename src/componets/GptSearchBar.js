import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { json } from "react-router-dom";
import { addGptMovieResult } from "../utils/gptSlice";
// import openai from "../utils/openai";

const GptSearchBar = (movie) => {
  const [movieSearchText, setMovieSearchText] = useState("");
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang); // this is the way to fetch value from redux store
  const searchText = useRef(null);

  // movie search in TMDB
  const searchMovieTmdb = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieSearchText +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setMovieSearchText(searchText.current.value);
    console.log(searchText.current.value);
    const movie = searchText.current.value;

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   "only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar , Sholay, Don, Dhoom, Fukrey";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);

    // for Movie I'll call tmdb api

    const tmdbResults = await searchMovieTmdb(movie);

    dispatch(
      addGptMovieResult({ movieNames: movie, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center rounded-lg">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
