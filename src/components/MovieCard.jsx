/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */


import { useState } from "react";
import { IMG_CDN } from "../utils/Constant"
import MoreInfoCard from "./moreInfo/MoreInfoCard";

const MovieCard = ({ posterPath, movieId, title, desc }) => {

  const [showInfo, setShowInfo] = useState(false)

  const handleMouseOver = () => {
    setShowInfo(true)
  }

  const handleMouseOut = () => {
    setShowInfo(false)
  }


  if (!posterPath) return;

  return (
    <div className="w-28 md:w-48 pr-4">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src={IMG_CDN + posterPath} alt="" />
      </div>
      {
        showInfo &&
        <div className="hidden md:inline-block  ">
          <MoreInfoCard movieId={movieId} title={title} desc={desc} />

        </div>
      }
    </div>
  )
}

export default MovieCard





