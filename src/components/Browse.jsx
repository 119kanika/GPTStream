/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "./Header"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../customHooks/usePopularMovies";

const Browse = () => {

  //calling the api, getting data and updating store using dispatch.
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse