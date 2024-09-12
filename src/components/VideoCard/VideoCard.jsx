import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchData } from "../../utils/api";
import { viewConverter } from "../../utils/utilityFunction";
import moment from "moment";

const VideoCard = ({ item }) => {
    const { title, thumbnails, channelTitle, publishedAt, channelId } =
        item?.snippet;

    const { isCollapse, cardSize, cardSizeCollapse } = useSelector(
        (state) => state.app
    );

    const [channelDetail, setChannelDetail] = useState([]);

    const size = isCollapse ? cardSizeCollapse : cardSize;

    useEffect(() => {
        const fetchChannel = async () => {
            try {
                const data = await fetchData("channels", {
                    part: "snippet",
                    id: channelId,
                });

                setChannelDetail(data.items);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };

        fetchChannel();
    }, []);

    return (
        <div className="">
            <div className="aspect-[16/9] sm:rounded-xl">
                <img
                    src={thumbnails?.standard?.url}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover sm:rounded-xl"
                />
            </div>
            <div className="flex flex-row mt-3 gap-3  ml-2 sm:ml-0">
                <div className="w-10 h-10">
                    <img
                        src={
                            channelDetail[0]?.snippet?.thumbnails?.default?.url
                        }
                        alt="Channel Thumbnail"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>

                <div className="mr-3 w-[calc(100%-60px)]">
                    <h3 className="font-medium text-[15px] truncate-2-lines">
                        {title}
                    </h3>
                    <p className="text-sm text-[#AAAAAA]">{channelTitle}</p>
                    <div className="">
                        <span className="text-sm text-[#AAAAAA]">
                            {viewConverter(item?.statistics?.viewCount)} views
                        </span>
                        <span className="text-sm text-[#AAAAAA]">
                            {" "}
                            • {moment(publishedAt).fromNow()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
