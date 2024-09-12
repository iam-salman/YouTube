import React from "react";
import user from "../../assets/User.png";
import moment from "moment";
import { viewConverter } from "../../utils/utilityFunction";

const SearchCard = ({ item }) => {
    const { title, thumbnails, channelTitle, publishedAt } = item?.snippet;

    const viewConverter = (count) => {
        if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
        if (count >= 1000) return (count / 1000).toFixed(1) + "K";
        return count;
    };

    return (
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:mb-4 py-3 sm:py-0">
            {/* Thumbnail with 16:9 aspect ratio */}
            <div className="flex-shrink-0 w-full sm:w-[500px] aspect-[16/9]">
                <img
                    src={thumbnails?.high?.url}
                    alt={title}
                    className="w-full h-full sm:rounded-lg object-cover"
                />
            </div>

            {/* Video details */}
            <div className="sm:flex flex-col gap-3 px-3 sm:px-0 h-16 hidden">
                <div className="flex flex-col gap-2">
                    <div className="text-lg  truncate-2-lines">{title}</div>
                    <div className="flex sm:flex-col gap-2 text-xs">
                        <div className="flex flex-wrap items-center gap-1">
                            {/* <span className="text-[#AAAAAA]">
                                {viewConverter(viewCount)} views
                            </span> */}
                            <span className="text-[#AAAAAA]">•</span>
                            <span className="text-[#AAAAAA]">
                                {moment(publishedAt).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 flex-shrink-0">
                        <img
                            src={user}
                            alt="Channel Thumbnail"
                            className="w-7 h-7 rounded-full object-cover"
                        />
                    </div>
                    <div className="text-[#AAAAAA] text-xs">{channelTitle}</div>
                </div>
            </div>

            <div className="flex gap-3 px-3 sm:px-0 h-16 sm:hidden">
                <div className="w-10 h-10 flex-shrink-0 sm:hidden block">
                    <img
                        src={user}
                        alt="Channel Thumbnail"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium truncate-2-lines">
                        {title}
                    </div>
                    <div className="flex sm:flex-col gap-2 text-xs">
                        <div className="text-[#AAAAAA]">{channelTitle}</div>
                        <div className="flex flex-wrap items-center gap-1">
                            {/* <span className="text-[#AAAAAA]">
                                {viewConverter(viewCount)} views
                            </span> */}
                            <span className="text-[#AAAAAA]">•</span>
                            <span className="text-[#AAAAAA]">
                                {moment(publishedAt).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
