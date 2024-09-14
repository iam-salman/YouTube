import React, { useEffect, useState } from "react";
import VideoSuggestionCard from "./VideoSuggestionCard";
import { useDispatch } from "react-redux";
import { fetchData } from "../../utils/api";
import { setLoader } from "../../redux/features/appSlice";
import { Link } from "react-router-dom";

const VideoSuggestion = ({ id }) => {
    const [videoList, setVideoList] = useState([]);
    const [categoryId, setCategoryId] = useState(null); // Set to null initially

    const youtubeCategoryIds = [10, 19, 20, 22, 30, 32, 35, 36, 37, 38, 39, 44];

    // Function to generate a random category ID
    const getRandomCategoryId = () => {
        const randomIndex = Math.floor(
            Math.random() * youtubeCategoryIds.length
        );
        return youtubeCategoryIds[randomIndex];
    };

    const dispatch = useDispatch();

    // Use async/await to ensure the random category ID is set before fetching data
    useEffect(() => {
        const fetchVideoData = async () => {
            dispatch(setLoader());

            try {
                // Generate and set the random category ID
                const randomCategoryId = await getRandomCategoryId();
                console.log(randomCategoryId);

                setCategoryId(randomCategoryId);

                // Fetch video data based on the random category ID
                const data = await fetchData("videos", {
                    part: "snippet, contentDetails, statistics",
                    chart: "mostPopular",
                    hl: "en",
                    maxResults: 24,
                    regionCode: "IN",
                    videoCategoryId: randomCategoryId,
                });

                setVideoList(data.items);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }

            dispatch(setLoader());
        };

        fetchVideoData();
    }, [id, dispatch]); // Trigger when 'id' changes

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
