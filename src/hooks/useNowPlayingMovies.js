import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addKnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch data from tmdb api and update store
  const dispatch = useDispatch();

  const getKnowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addKnowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getKnowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
