import React, { useEffect, useState } from "react";
import {
    addCommasToNumber,
    subscriberConverter,
    viewConverter,
} from "../../utils/utilityFunction";
import moment from "moment";

import {
    DisLikeIcon,
    DownloadIcon,
    LikeIcon,
    ShareIcon,
    ThreeDot,
} from "../../assets/Icon";
import Description from "./Description";

const VideoDetails = ({ videoDetail, channelDetail }) => {
    const { title, channelTitle, publishedAt, description } =
        videoDetail[0]?.snippet || {};

    const { commentCount, likeCount, viewCount } =
        videoDetail[0]?.statistics || {};

    return (
        <div className="px-3 py-3 sm:px-0">
            <div className="pb-2">
                <h1 className="font-bold text-[19px]">
                    {title || "Video Title"}
                </h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-7 items-center">
                    <div className="flex gap-x-3 items-center">
                        <div className="">
                            <img
                                src={
                                    channelDetail[0]?.snippet?.thumbnails
                                        ?.default?.url
                                }
                                alt=""
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-[16px] font-medium">
                                {channelTitle || "Channel Title"}
                            </h2>
                            <p className="text-xs text-gray-500 font-medium">
                                {subscriberConverter(
                                    channelDetail[0]?.statistics
                                        ?.subscriberCount || 0
                                )}{" "}
                                subscribers
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-white bg-[#272727] rounded-3xl font-medium px-3 py-[6px] text-sm">
                            Subscribe
                        </p>
                    </div>
                </div>

                <div className="md:flex gap-x-4 hidden">
                    <div className="flex items-center flex-row">
                        <div className=" flex gap-2 items-center justify-between rounded-l-3xl px-3 py-[7px] bg-[#272727]">
                            <LikeIcon />
                            <span className="font-semibold text-sm">
                                {viewConverter(likeCount || 27)}
                            </span>
                        </div>
                        <div
                            className=" h-5/3  top-0 left-0"
                            style={{ width: "1px" }}
                        ></div>
                        <div className="flex gap-2 items-center justify-between rounded-r-3xl px-3 py-[7px] bg-[#272727]">
                            <DisLikeIcon />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 justify-between rounded-3xl px-3 py-[7px] bg-[#272727]">
                        <ShareIcon />
                        <span className="text-sm font-semibold">Share</span>
                    </div>

                    <div className="rounded-full px-2 py-2 bg-[#272727] mr-8">
                        <ThreeDot />
                    </div>
                </div>
            </div>

            <div className="bg-[#272727] rounded-xl mt-4 py-3 px-3">
                <div className="flex items-center gap-4 font-bold text-sm">
                    <span className="">
                        {addCommasToNumber(viewCount || 0)} views
                    </span>
                    <span className="">
                        {moment(publishedAt || 2340128).format("MMM DD, YYYY")}
                    </span>
                </div>

                <Description
                    description={description || "abc"}
                    url={channelDetail[0]?.snippet?.thumbnails?.default?.url}
                    channelTitle={channelTitle}
                    subscriberCount={
                        channelDetail[0]?.statistics?.subscriberCount
                    }
                />
            </div>
        </div>
    );
};

export default VideoDetails;
