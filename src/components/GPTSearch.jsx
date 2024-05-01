// import GptSearchBar from "./GptSearchBar"
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import GeminiSearchBar from "./GeminiSearchBar";

import TmdbSearch from "./TmdbSearch";

const GPTSearch = () => {
  return (
    <div>
      <div className="w-screen bg-cover bg-center bg-gradient-to-t from-zinc-700 to-zinc-900 ">
        {/* <GptSearchBar/> */}
        <div className="pt-[24%] md:pt-[5%]">
          {/* <GeminiSearchBar /> */}
          {/* <GptMovieSuggestion /> */}
          <TmdbSearch />
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;

// bg-[url('https://media.gettyimages.com/id/1359317801/video/abstract-dark-gray-wave-backgrounds-loop.jpg?s=640x640&k=20&c=cGA2YzWxfRpC3wbXGAwBJw8xnw3_ubondDSs_izS194=')]
