/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const  GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
}
    
)

export const {toggleGPTSearchView, addGptMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer