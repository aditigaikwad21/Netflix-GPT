import React from 'react'
import {useSelector} from 'react-redux';
import useMovieTrailer  from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movie ?.trailerVideo );
    useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/-ezfi6FQ8Ds"+ "?&autoplay=1&mute=1"} title="Venom: The Last Dance | Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe></div>
  )
}

export default VideoBackground