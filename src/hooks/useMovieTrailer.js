import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch  } from 'react-redux';
import  { useEffect } from 'react'
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {

        const options = {
            method: 'GET',
            headers: { 
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWJkMDEwODRjNjgzZmM0MTcwNDBkODZlM2YxNTdjYyIsIm5iZiI6MTczMDU3MDg3NC44MTAzMzYsInN1YiI6IjY3MTNkMzg4MGNiNjI1MmY5OTA4NjE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w0_6ZA-EOEiy1DM9he4XgyaM0h6WAW8Fewmzq7NgDag'
            }
          };
        const data = await fetch('https://api.themoviedb.org/3/movie/'+
            movieId+
            '/videos?language=en-US', options)
       
        const json = await data.json();

        if (Array.isArray(json.results)) {
           const filterdata = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterdata.length  ? filterdata[0] : json.results[0] ;
           dispatch(addTrailerVideo(trailer));
        } else {
            console.error("results is not an array", json.results);
        }
       
    };

    useEffect(() => {
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;