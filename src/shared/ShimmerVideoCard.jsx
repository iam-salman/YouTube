import React from "react";

const ShimmerVideoCard = () => {
    return (
        <div className="my-2 w-screen sm:w-auto">
            <div className="aspect-[16/9] sm:rounded-xl">
                <div className="w-full h-full object-cover sm:rounded-xl bg-[#333333]"></div>
            </div>

            <div className="flex flex-row mt-3 gap-3  ml-2 sm:ml-0 px-2 sm:px-0">
                <div className="w-10 h-10 bg-[#333333] rounded-full"></div>
                <div className="mr-3 w-[calc(100%-60px)] px-2 sm:px-0">
                    <div className="sm:h-6 h-5 bg-[#333333] rounded-md mb-2 mr-2"></div>
                    <div className="sm:h-6 h-5 bg-[#333333] rounded-md mb-2 mr-14"></div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerVideoCard;
