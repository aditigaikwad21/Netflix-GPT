import React from 'react'

const PlayIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="play-icon"
      width="24px"
      height="24px"
  >
      <path d="M8 5v14l11-7z" />
  </svg>
);

const InfoIcon = () => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  width="24px"
  height="24px"
  className="inline-block mr-2" // Add margin for spacing
>
  <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
</svg>
);

const VideoTitle = ({title,overview}) => {
  return (
   
    <div className='w-screen aspect-video  pt-40 px-12 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-6xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/4'>{overview}</p>
       <div className="flex space-x-4">
        <button className="bg-red-600 text-white font-bold py-2 px-7 rounded transition-transform transform hover:scale-105 hover:bg-red-700 flex items-center">
            <PlayIcon />
            <span className="ml-2">Play</span>
        </button>
        
        <button className="bg-gray-600 text-white font-bold py-2 px-7 rounded transition-transform transform hover:scale-105 hover:bg-gray-700 flex items-center">
            <InfoIcon />
            <span className="ml-2">More Info</span>
        </button>
    </div>
    </div>
 
  )
}

export default VideoTitle