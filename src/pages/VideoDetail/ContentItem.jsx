import React, { useEffect, useState } from "react";
import Video from "./Video";
import { setLoader } from "../../redux/features/appSlice";
import { fetchData } from "../../utils/api";
import VideoSuggestion from "./VideoSuggestion";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ContentItem = () => {
    const expand = useSelector((state) => state.app.isExpand);

    const { id } = useParams();

    const [videoDetail, setVideoDetail] = useState([]);
    const [channelDetail, setChannelDetail] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchVideoData = async () => {
            dispatch(setLoader());
            try {
                const data = await fetchData("videos", {
                    part: "snippet, contentDetails, statistics",
                    id: id,
                });

                setVideoDetail(data.items);

                if (data.items.length > 0) {
                    const channelId = data.items[0]?.snippet?.channelId;
                    if (channelId) {
                        fetchChannel(channelId);
                    }
                }
            } catch (error) {
                console.error("Error fetching video data:", error);
            }

            dispatch(setLoader());
        };

        const fetchChannel = async (channelId) => {
            try {
                const data = await fetchData("channels", {
                    part: "snippet, statistics",
                    id: channelId,
                });

                setChannelDetail(data.items);
            } catch (error) {
                console.error("Error fetching channel data:", error);
            }
        };

        fetchVideoData();
    }, [id]);

    return (
        <div
            className={`${
                expand ? "md:w-[calc(100%-208px)]" : "md:w-[calc(100%-64px)]"
            } grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 h-screen overflow-y-auto scrollbar-thin sm:px-3 pb-28`}
        >
            {/* Video component - 2fr part */}
            <div className="sm:col-span-2">
                <Video
                    id={id}
                    videoDetail={videoDetail}
                    channelDetail={channelDetail}
                />
            </div>

            {/* VideoSuggestion component - 1fr part */}
            <div className="col-span-1 flex flex-col sm:mr-12">
                <VideoSuggestion
                    categoryId={videoDetail[0]?.snippet?.categoryId || 0}
                />
            </div>
        </div>
    );
};

export default ContentItem;
