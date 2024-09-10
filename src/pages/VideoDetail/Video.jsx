import React from "react";
import VideoDetails from "./VideoDetails";
import VideoComment from "./VideoComment";

const Video = ({ id, videoDetail, channelDetail }) => {
    return (
        <div className="">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-xl"
                ></iframe>
            </div>

            <div className="">
                <VideoDetails
                    videoDetail={videoDetail}
                    channelDetail={channelDetail}
                />
            </div>

            <div className="">
                <VideoComment
                    videoDetail={videoDetail}
                    channelDetail={channelDetail}
                    id={id}
                />
            </div>
        </div>
    );
};

export default Video;
