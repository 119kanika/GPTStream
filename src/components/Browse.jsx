/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constant"
import Header from "./Header"

const Browse = () => {

  //api call
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json()
    console.log(json.results);
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse