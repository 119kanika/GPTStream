/* eslint-disable no-unused-vars */
import { useRef } from "react";
import openai from "../utils/OpenAi";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleSearchClick = async () => {
    const gptQuery = "Act as a Movie/series Recommendation system and suggest some movies and series for the query " + searchText.current.value + ". Only give me names of upto top 10 movies or series, comman seperated like example result given ahead. Example Result: Sholay, Don, Gadar, Welcome, Golmaal 2, Koi mil gaya, Kite, Veer, Chennai express, Ek tha tiger";

    // make api call to gpt api and get the results
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 mx-auto bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder="What are you planing to watch today?"
        />
        <button
          onClick={handleSearchClick}
          className="col-span-4 m-4 py-2 px-4 bg-red-600 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
