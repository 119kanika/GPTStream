/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const dispatch = useDispatch();

  //fetch trailer video from movie id
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
      
      dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
