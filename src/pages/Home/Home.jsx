import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../components/VideoCard/VideoCard";
import { setHomeVideo, setLoader } from "../../redux/features/appSlice";
import ShimmerVideoCard from "../../shared/ShimmerVideoCard";
import { fetchData } from "../../utils/api";
import { Link } from "react-router-dom";

const Home = () => {
    const expand = useSelector((state) => state.app.isExpand);
    const videoList = useSelector((state) => state.app.homeVideo);

    const isLoading = useSelector((state) => state.app.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchVideoData = async () => {
            dispatch(setLoader());
            try {
                const data = await fetchData("videos", {
                    part: "snippet, contentDetails, statistics",
                    chart: "mostPopular",
                    hl: "en",
                    maxResults: 48,
                    regionCode: "IN",
                });

                dispatch(setHomeVideo(data.items));
            } catch (error) {
                console.error("Error fetching video data:", error);
            }

            dispatch(setLoader());
        };

        fetchVideoData();
    }, []);
    return (
        <div
            className={`${
                expand ? "md:w-[calc(100%-208px)]" : "md:w-[calc(100%-64px)]"
            } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 overflow-y-auto h-screen pt-5 pb-20 scrollbar-thin sm:px-3`}
        >
            {isLoading
                ? Array.from({ length: 28 }).map((_, index) => (
                      <ShimmerVideoCard key={index} />
                  ))
                : videoList.map((item) => (
                      <Link to={`/watch/${item.id}`} key={item.id}>
                          <VideoCard item={item} />
                      </Link>
                  ))}
        </div>
    );
};

export default Home;
