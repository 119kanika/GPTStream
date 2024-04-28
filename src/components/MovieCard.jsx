/* eslint-disable react/prop-types */
import {IMG_CDN} from "../utils/Constant"

const MovieCard = ({posterPath}) => {

  if(!posterPath) return;

  return (
    <div className="w-48 pr-4">
        <img src={IMG_CDN + posterPath} alt="" />
    </div>
  )
}

export default MovieCard