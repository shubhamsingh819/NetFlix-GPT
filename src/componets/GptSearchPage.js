import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="object-cover" src={BACKGROUND_IMAGE_URL} alt="netFlix logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
