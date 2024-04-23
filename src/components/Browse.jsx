/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "./Header"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"

const Browse = () => {

  //calling the api, getting data and updating store using dispatch.
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse