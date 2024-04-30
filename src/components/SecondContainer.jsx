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
      <div className="-mt-32 sm:-mt-20 md:-mt-54 pl-0 sm:pl-10 pr-2 sm:pr-8 relative z-20 ">
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        <SeriesList title={"Now Airing Series"} series={airedToday} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
