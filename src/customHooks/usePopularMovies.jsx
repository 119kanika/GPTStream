/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addPopularMovies} from "../utils/MovieSlice"

const usePopularMovies = () => {

    const dispatch = useDispatch();

    //api call
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json()

        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;