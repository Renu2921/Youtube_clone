import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/toggleSlice";
import { GOOGLE_KEY } from "../utils/constants/apiConstant";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";
import VideoCard from "./VideoCard";

const VideoWatch = () => {
  const [videoPlayData, setVideoPlayData] = useState(null);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const SearchId = searchParams.get("v");
  const videoDatas = useSelector((state) => state.video.videoListData);

  // ✅ Wrap videoData in useCallback
  const videoData = useCallback(async () => {
    if (!SearchId) return;
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${SearchId}&key=${GOOGLE_KEY}`
      );
      const jsonData = await response.json();
      setVideoPlayData(jsonData?.items?.[0] || null);
    } catch (error) {
      console.error("Failed to fetch video data:", error);
    }
  }, [SearchId]);

  useEffect(() => {
    dispatch(closeMenu());
    videoData();
  }, [dispatch, videoData]); // ✅ include videoData as dependency

  return (
    <div className="w-full">
      <div className="p-7 gap-2 flex w-full">
        <div>
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${SearchId}`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
          <div className="font-bold text-[1.7rem]">{videoPlayData?.snippet?.title}</div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-[75%]">
          <CommentContainer />
        </div>
        <div className="w-[25%] h-[820px] flex flex-col items-center overflow-y-scroll">
          {[...videoDatas]?.reverse().map((video) => (
            <div key={video?.id}>
              <VideoCard info={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoWatch;
