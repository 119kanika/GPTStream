/* eslint-disable react/prop-types */
import { IMG_CDN } from "../utils/Constant"

const SeriesCard = ({posterPath}) => {
  return (
    <div>
    <div className="w-28 md:w-48 pr-4">
        <img src={IMG_CDN + posterPath} alt="" />
    </div>
    </div>
  )
}

export default SeriesCard