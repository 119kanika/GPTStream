/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { addAiredTodaySeries } from "../utils/MovieSlice";

const useAiringTodaySeries = () => {

    const dispatch = useDispatch();

    const getAiredSeriesList = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/airing_today", API_OPTIONS);
        const json = await data.json()


        dispatch(addAiredTodaySeries(json.results));
    }

    useEffect( () => {
        getAiredSeriesList();
    },[])

}

export default useAiringTodaySeries;
