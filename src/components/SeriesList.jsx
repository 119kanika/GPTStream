/* eslint-disable react/prop-types */

import SeriesCard from "./SeriesCard"

const SeriesList = ({title, series}) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {series.map((series) => (
            <SeriesCard key={series.id} posterPath={series.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeriesList