/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null; //nothing found

  return (
    <div className="m-4 text-white">
      <div>
        {movieNames.map((movieName) => (
          <MovieList
            key={movieName}
            title={movieName[0]}
            movie={movieResults[0]}
          />
        ))}
        <h1>{movieNames[0]}</h1>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
