import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice/"
import moviesReducer from './MovieSlice'
import GPTReducer from './GPTSlice'

const appStore = configureStore(
    {
        reducer: {
            user: UserReducer,
            movies: moviesReducer,
            gpt: GPTReducer,
        }
    }
);

export default appStore;