/* eslint-disable react/prop-types */

import SeriesCard from "./SeriesCard"

const SeriesList = ({title, series}) => {
  return (
    <div className="px-6 pt-8 ">
      <h1 className="text-xl py-2 md:text-3xl mb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
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