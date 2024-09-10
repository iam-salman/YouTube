import React from "react";
import { DisLikeIcon, LikeIcon } from "../../assets/Icon";

const CommentItem = ({ item }) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        publishedAt,
        textDisplay,
        updatedAt,
    } = item?.snippet?.topLevelComment?.snippet;

    return (
        <div className="mt-2 sm:px-1 py-2 px-3">
            <div className="flex">
                <div className="flex flex-shrink-0">
                    <img
                        src={authorProfileImageUrl}
                        alt=""
                        className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                </div>
                <div className="ml-5 flex flex-col">
                    <div className="text-[13px] font-medium">
                        {authorDisplayName}
                    </div>
                    <div className="">
                        <p
                            className="text-sm"
                            dangerouslySetInnerHTML={{ __html: textDisplay }}
                        />
                    </div>

                    <div className="mt-2 flex items-center">
                        <button className="flex items-center mr-2 focus:outline-none">
                            <LikeIcon className="w-5 h-5" />
                            <p className="text-sm text-[#bcbcbc] mt-1 ml-2">
                                {likeCount}
                            </p>
                        </button>
                        <button className="focus:outline-none">
                            <DisLikeIcon className="w-5 h-5 text-red-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;
