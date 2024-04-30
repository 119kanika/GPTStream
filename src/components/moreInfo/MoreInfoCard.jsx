/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { useState } from "react"
import useMovieTrailer from "../../customHooks/useMovieTrailer"
import { FaPlay } from "react-icons/fa"
import { resetTrailerVideo } from "../../utils/MovieSlice"


const MoreInfoCard = ({ movieId, title, desc }) => {

  const video = useSelector(store => store.movies?.trailerVideo)

  useMovieTrailer(movieId)

  const [play, setPlay] = useState(1);

  const handlePlay = () => {
    if (play) setPlay(0);
    else setPlay(1);
  };


  return (
    <div className="flex-col absolute bg-zinc-700 w-[70vh] h-[65vh] z-50">
      <div >
        <iframe
          className="w-[100%] h-[100%] aspect-video"
          src={
            "https://www.youtube.com/embed/" +
             video?.key +
            "?&autoplay=" + play + "&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="flex px-4">
        <div>
          <h1 className="py-4 text-xl">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="py-4 px-6">
          <button onClick={handlePlay}>
            <FaPlay />

          </button>
        </div>
      </div>
    </div>
  )
}

export default MoreInfoCard



