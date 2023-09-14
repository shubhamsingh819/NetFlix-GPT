import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52  pl-12 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Toprated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
          <MovieList title={"Funny Movies"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
/* 
    MovieList -- popular
      movieCard * n

    MovieList -- trending
    MovieList -- NowPlaying
    MovieList -- Horror
    MovieList -- Action
    */
