import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"

const GPTSearch = () => {
  return (
    <div className="bg-gray-900">
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch