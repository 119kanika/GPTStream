/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import { useState } from "react";
import {IMG_CDN} from "../utils/Constant"
import MoreInfoCard from "./moreInfo/MoreInfoCard";

const MovieCard = ({posterPath, movieId, title, desc}) => {

  const [showInfo, setShowInfo] = useState(false)

  const handleMoreInfocard = () => {
    if(!showInfo) {
      setShowInfo(true)
    }
    else
    setShowInfo(false)
  }


  if(!posterPath) return;

  return (
    <div className="w-28 md:w-48 pr-4">
        <img onMouseOver={handleMoreInfocard} src={IMG_CDN + posterPath} alt="" />
        {
          showInfo && <MoreInfoCard onMouseOut={handleMoreInfocard} movieId={movieId} title={title} desc={desc}/>
        }
    </div>
  )
}

export default MovieCard





