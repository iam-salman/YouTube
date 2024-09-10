import { useState } from "react";
import { subscriberConverter } from "../../utils/utilityFunction";

subscriberConverter;

const Description = ({ description, url, channelTitle, subscriberCount }) => {
    const btnValue = ["...more", "Show less"];

    const [btnIndex, setBtnIndex] = useState(0);

    const handleBtnText = () => {
        setBtnIndex((prev) => prev ^ 1);
    };

    return (
        <div className="">
            <div className=" mt-1 text-[#272727]">
                <div className={`${btnIndex ? "" : "truncate-2-lines"}`}>
                    {(description || "").split("\n").map((line, index) => (
                        <span key={index} className="text-sm block">
                            {line.length === 0 ? (
                                <br />
                            ) : (
                                line.split(/\b(#\w+)\b/).map((part, idx) => {
                                    return part.startsWith("#") ? (
                                        <span
                                            key={idx}
                                            className="text-[#3985C7]"
                                        >
                                            {part}
                                        </span>
                                    ) : (
                                        <span key={idx}>{part}</span>
                                    );
                                })
                            )}
                        </span>
                    ))}
                </div>

                <div
                    className={`flex flex-row gap-x-3 items-center mt-12 mb-20 ${
                        btnIndex ? "" : "hidden"
                    }`}
                >
                    <div className="">
                        <img
                            src={url}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                    <div className="">
                        <h2 className="text-[18px] font-medium">
                            {channelTitle}
                        </h2>
                        <p className="text-xs text-gray-500 font-medium">
                            {subscriberConverter(subscriberCount || 0)}{" "}
                            subscribers
                        </p>
                    </div>
                </div>
            </div>

            <button className="font-medium text-sm" onClick={handleBtnText}>
                {btnValue[btnIndex]}
            </button>
        </div>
    );
};

export default Description;
