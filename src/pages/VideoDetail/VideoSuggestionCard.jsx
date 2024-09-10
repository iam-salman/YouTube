import { viewConverter } from "../../utils/utilityFunction";
import moment from "moment";
import user from "../../assets/User.png";

const VideoSuggestionCard = ({ item }) => {
    const { title, thumbnails, channelTitle, publishedAt } = item?.snippet;
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:mb-4 py-3 sm:py-0">
            {/* Thumbnail with 16:9 aspect ratio */}
            <div className="flex-shrink-0 w-full sm:w-40 aspect-[16/9]">
                <img
                    src={thumbnails?.standard?.url}
                    alt={title}
                    className="w-full h-full sm:rounded-lg object-cover"
                />
            </div>

            {/* Video details */}
            <div className="flex gap-3 px-3 sm:px-0 h-16">
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
                            <span className="text-[#AAAAAA]">
                                {viewConverter(item?.statistics?.viewCount)}{" "}
                                views
                            </span>
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

export default VideoSuggestionCard;
