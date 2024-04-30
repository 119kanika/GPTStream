/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { useState } from "react"
import useMovieTrailer from "../../customHooks/useMovieTrailer"
import { FaPlay } from "react-icons/fa"


const MoreInfoCard = ({ movieId, title, desc }) => {
  console.log("infoCard", movieId);

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  useMovieTrailer(movieId)

  const [play, setPlay] = useState(1);

  const handlePlay = () => {
    if (play) setPlay(0);
    else setPlay(1);
  };

  return (
    <div className="absolute bg-zinc-700 w-[70vh] h-[65vh] -mt-[20%]">
      <div >
        <iframe
          className="w-[100%] h-[50%] aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
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



