/* eslint-disable react/prop-types */

import SeriesCard from "./SeriesCard";
import { FaForward } from "react-icons/fa";

const SeriesList = ({ title, series }) => {
  return (
    <div className="px-2 pt-4 ">
      <h1 className="text-lg py-2 pb-1 md:text-3xl mb-2 text-white">
        {title} <FaForward />
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {series.map((series) => (
            <SeriesCard key={series.id} posterPath={series.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesList;
