import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
       MainContainer 
          - vedeo background
          - vedeo title
       secondaryContainer
          - movieList * n
             - cards * n 
      */}
    </div>
  );
};

export default Browse;
