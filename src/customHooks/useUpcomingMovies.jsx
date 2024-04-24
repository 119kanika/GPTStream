/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addUpcomingMovies} from "../utils/MovieSlice"

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    //api call
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json()

        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;