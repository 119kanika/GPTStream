import { useState } from "react";
import useTmdbSearch from "../customHooks/useTmdbSearch";
import { IMG_CDN } from "../utils/Constant";

const TmdbSearch = () => {
  const [searchText, setSearchText] = useState("");
  const { searchData } = useTmdbSearch(searchText);

  const handleSearchClick = (event) => {
    event.preventDefault(); // prevent form from submitting normally
    // Search trigger handled by state change, searchText is the dependency of useEffect inside the useTmdbSearch
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          onSubmit={handleSearchClick}
          className="w-3/4 md:w-1/2 mx-auto bg-black grid grid-cols-12"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-4 m-4 col-span-8"
            placeholder="What are you planing to watch today?"
          />
          <button
            type="submit"
            className="col-span-4 m-4 py-2 px-4 bg-red-600 text-white rounded-md"
          >
            Search
          </button>
        </form>
      </div>

      {searchData && searchData.length > 0 ? (
        <div className=" px-0 md:px-2 md:pt-4 ">
          <h1 className="text-md px-8 py-2 pt-6 md:text-3xl mb-2 text-white">
            Your search result:{" "}
            <span className="font-bold text-md md:text-3xl">{searchText}</span>
          </h1>
          <div className="my-12">
            <div className="flex flex-wrap justify-center">
              {searchData.map((result) => (
                <div
                  key={result.id}
                  className=" m-1 md:m-2 w-24 md:w-48 px-0 md:pr-4 transition ease-in-out delay-130 hover:-translate-y-5 hover:scale-110 "
                >
                  <img src={IMG_CDN + result.poster_path} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center pt-4">
          Search for your favourite movies and series
        </h1>
      )}
    </div>
  );
};

export default TmdbSearch;

{
  /* <div className="flex">
          <h1>Results:</h1>
          {searchData.map((result) => (
            <div key={result.id} className="m-4 text-black">
              <h1 className="text-lg py-2 pt-6 md:text-3xl mb-2">
                {result.original_title}
              </h1>
              <img src={IMG_CDN + result.poster_path} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <h1>No data</h1>
      )}
    </div> */
}
