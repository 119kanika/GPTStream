import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion";
// import GeminiSearchBar from "./GeminiSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="justify-center w-screen h-screen  bg-no-repeat bg-cover bg-center rounded-lg  bg-[url('https://media.gettyimages.com/id/1359317801/video/abstract-dark-gray-wave-backgrounds-loop.jpg?s=640x640&k=20&c=cGA2YzWxfRpC3wbXGAwBJw8xnw3_ubondDSs_izS194=')]">
        <GptSearchBar/>
        <div className="pt-[24%] md:pt-[5%]">
          {/* <GeminiSearchBar /> */}
          <GptMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
