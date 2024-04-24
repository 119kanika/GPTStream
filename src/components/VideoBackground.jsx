/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useState } from "react";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch trailer video from movie id and updating store with trailer video data.
  useMovieTrailer(movieId);

  const [audio, setAudio] = useState(1);

  const handleAudioPlay = () => {
    if (audio) setAudio(0);
    else setAudio(1);
  };

  return (
    <div className=" relativew-screen ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=" +
          audio
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

        <button
          onClick={handleAudioPlay}
          className=" absolute right-2 bottom-2 flex items-center justify-center text-xl bg-black w-12 h-12 rounded-full"
        >
          🔉
        </button>
    </div>
  );
};

export default VideoBackground;
