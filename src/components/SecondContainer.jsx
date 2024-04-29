/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
// import MovieCard from "./MovieCard"
import MovieList from "./MovieList";
import SeriesList from "./SeriesList";

const SecondContainer = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    airedToday,
  } = useSelector((store) => store.movies);

  if (
    !nowPlayingMovies ||
    !popularMovies ||
    !topRatedMovies ||
    !upcomingMovies ||
    !airedToday
  )
    return <div>Loading Movies...</div>;


  return (
    <div className=" bg-gradient-to-r from-neutral-900 to-black font-bold">
      <div className="sm:-mt-20 md:-mt-54 pl-10 pr-8 relative z-20 mt-10">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <SeriesList title={"Now Airing Series"} series={airedToday} />
      </div>
    </div>
  );
};

export default SecondContainer;
