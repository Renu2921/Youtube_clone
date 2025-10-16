import React, { useEffect, useCallback } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants/apiConstant';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoListData } from '../utils/store/videoListSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.videoListData);
  
  const fetchVideoData = useCallback(async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await response.json();
      dispatch(setVideoListData(jsonData?.items || []));
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchVideoData();
  }, [fetchVideoData]); 

  return (
    <div className="w-full flex flex-wrap justify-start gap-6">
      {videoData?.map((video) => (
        <div key={video?.id}>
          <VideoCard info={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
