/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { addTrailerVideo } from "../utils/MovieSlice";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();


    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
    
        const filteredData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer =
          filteredData.length == 0 ? filteredData[0] : json.results[0];
    
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}

export default useMovieTrailer;