import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { fetchData } from "../../utils/api";
import user from "../../assets/User.png";

const VideoComment = ({ videoDetail, channelDetail, id }) => {
    const [comment, setComment] = useState([]);
    console.log(comment);
    useEffect(() => {
        const fetchCommentThread = async (id) => {
            try {
                const data = await fetchData("commentThreads", {
                    part: "snippet,replies",
                    videoId: id, // Pass videoId correctly
                });

                setComment(data?.items); // Assuming setComment is a state setter function
            } catch (error) {
                console.error("Error in fetching video comments:", error);
            }
        };
        fetchCommentThread(id);
    }, [id]);

    return (
        <div className="rounded-xl sm:mx-0 mx-3 bg-[#222222] px-2">
            <div className="mb-3 px-3 pt-3">
                <span className="text-xl font-bold">Comments</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
                    <img src={user} className="w-10 h-10 rounded-full" />
                </div>

                <div className="flex-1 px-3">
                    <p className="text-sm text-[#878787]">Add a comment...</p>
                    <hr className="w-full border-white/[0.4] border-solid mt-1" />
                </div>
            </div>
            <div className="hidden md:block">
                {comment.map((item) => (
                    <CommentItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default VideoComment;
