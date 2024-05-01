/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    airedToday: null,
    seriesTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addSeriesTrailer: (state, action) => {
      state.seriesTrailer = action.payload;
    },
    resetTrailerVideo: (state) => {
      state.trailerVideo = null;
    },
    addAiredTodaySeries: (state, action) => {
      state.airedToday = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addAiredTodaySeries,
  addSeriesTrailer,
  addTrailerVideo,
  resetTrailerVideo,
} = MovieSlice.actions;
export default MovieSlice.reducer;
