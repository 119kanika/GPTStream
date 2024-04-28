/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import {addNowPlayingMovies} from "../utils/MovieSlice"


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    //api call
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()

        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        if(!nowPlayingMovies)
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;