import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/toggleSlice";
import { GOOGLE_KEY } from "../utils/constants/apiConstant";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";
import VideoCard from "./VideoCard";

const VideoWatch = () => {
  const [, setVideoPlayData] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const SearchId = searchParams.get("v");
  const videoDatas = useSelector((state) => state.video.videoListData);
  console.log("videoDatsss", videoDatas);
  useEffect(() => {
    dispatch(closeMenu());
    videoData();
  }, [dispatch]);

  const videoData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${SearchId}&key=` +
        GOOGLE_KEY
    );
    const jsonData = await response.json();
    console.log(jsonData?.items);
    setVideoPlayData(jsonData?.items?.[0]);
  };
  return (
    <div className="w-full">
      <div className="p-7 gap-2 flex w-full">
        <div>
          <iframe
            width="1200"
            height="600"
            src={`https://www.youtube.com/embed/${SearchId}`}
            title="Yotube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
          <div>
            iulhhuk
          </div>
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
