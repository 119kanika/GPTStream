/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopratedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import useAiringTodaySeries from "../customHooks/useAiringTodaySeries";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import FooterComp  from "./footer/FooterComp";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //calling the api, getting data and updating store using dispatch.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
          <FooterComp/>
        </>
      )}
    </div>
  );
};

export default Browse;
