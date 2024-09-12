import React, { useEffect, useState } from "react";
import VideoSuggestionCard from "./VideoSuggestionCard";
import { useDispatch } from "react-redux";
import { fetchData } from "../../utils/api";
import { setLoader } from "../../redux/features/appSlice";
import { Link } from "react-router-dom";

const VideoSuggestion = ({ categoryId, id }) => {
    const [videoList, setVideoList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVideoData = async () => {
            dispatch(setLoader());
            try {
                const data = await fetchData("videos", {
                    part: "snippet, contentDetails, statistics",
                    chart: "mostPopular",
                    hl: "en",
                    maxResults: 24,
                    regionCode: "IN",
                    videoCategoryId: "0",
                });

                setVideoList(data.items);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }

            dispatch(setLoader());
        };

        fetchVideoData();
    }, []);

    return (
        <div className="">
            {videoList.map((item) => {
                return (
                    <Link to={`/watch/${item.id}`} key={item.id}>
                        <VideoSuggestionCard item={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoSuggestion;
