import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice'; // Adjust the path as necessary

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=91bd01084c683fc417040d86e3f157cc');
                const data = await response.json();
                dispatch(addNowPlayingMovies(data.results));
            } catch (error) {
                console.error("Error fetching now playing movies:", error);
            }
        };

        fetchNowPlayingMovies();
    }, [dispatch]); // Empty dependency array means this effect runs once after the initial render
};

export default useNowPlayingMovies;
