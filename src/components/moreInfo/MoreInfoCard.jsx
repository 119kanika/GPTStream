/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useMovieTrailer from "../../customHooks/useMovieTrailer";
import { FaPlay } from "react-icons/fa";

const MoreInfoCard = ({ movieId, title, desc }) => {
  const video = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  const [play, setPlay] = useState(1);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulating the visibility toggle on component mount for demonstration
    setTimeout(() => {
      setVisible(true);
    }, 100); // delay to see the transition, remove or adjust as needed
  }, []);

  const handlePlay = () => {
    setPlay((prev) => (prev ? 0 : 1));
  };

  return (
    <div
      className={`md:flex-col md:bg-black text-white md:w-[70vh] md:h-[70vh] md:fixed md:top-[10%] md:right-[37%]
    transition-opacity duration-500 ease-in-out transform
    ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
    >
      <div>
        <iframe
          className="w-[100%] h-[100%] aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            video?.key +
            "?&autoplay=" +
            play +
            "&mute=1"
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
  );
};

export default MoreInfoCard;
