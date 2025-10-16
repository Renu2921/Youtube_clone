import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({info}) => {
    const navigate=useNavigate();
    const {snippet,statistics}=info;
    const {viewCount}=statistics;
    const {title,thumbnails,channelTitle}=snippet;

    const handleNavigte=()=>{
        navigate(`/watch?v=${info?.id}`);

    }
  return (
    <div className='my-4  w-[20rem] h-[20rem] shadow-lg p-2 '
    onClick={handleNavigte}>
      <img src={thumbnails?.medium?.url} alt="thumbnial-image"
      className='rounded -lg my-4'
      />
      <p className='font-semibold text-sm '>{title}</p>
      <p className='text-[0.8rem] text-gray-500'>{channelTitle}</p>
      <p className='text-[0.8rem] text-gray-500'>{viewCount} Views</p>
    </div>
  )
}

export default VideoCard;
 
