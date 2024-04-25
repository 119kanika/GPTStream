
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // State to hold the selected movie item
    const [movieItem, setMovieItem] = useState(null);

    // Effect to select a movie item when movies are loaded or updated
    useEffect(() => {
        if (movies && movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovieItem(randomIndex);
        }
    }, [movies]); // Only re-run if movies array changes

    // If movies are not loaded yet or if no movie has been selected, don't render anything
    if (!movies || movieItem === null) return null;

    // Retrieve the main movie using the stabilized movieItem index
    const mainMovie = movies[movieItem];

    // Destructure the required properties
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    );
}

export default MainContainer;
