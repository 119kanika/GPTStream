/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const  GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
}
    
)

export const {toggleGPTSearchView} = GPTSlice.actions;
export default GPTSlice.reducer