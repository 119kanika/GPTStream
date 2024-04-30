import { useState } from "react";
import useTmdbSearch from "../customHooks/useTmdbSearch";
// import MovieList from "./MovieList";

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
      {searchData && (
        <div>
          SeachData.map((res) => (
          <div className="m-4 text-white">
            <div>
              <h1>Results:</h1>
              <div className="px-2 pt-4 ">
                <h1 className="text-lg py-2 pt-6 md:text-3xl mb-2 text-white">
                  {res.title}
                </h1>
              </div>
            </div>
          </div>
          ))
        </div>
      )}
    </div>
  );
};

export default TmdbSearch;
