/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
// import MovieCard from "./MovieCard"
import MovieList from "./MovieList";

const SecondContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);

  if (!nowPlayingMovies) return <div>Loading Movies...</div>;

  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />{" "}
      </div>
    </div>
  );
};

export default SecondContainer;
