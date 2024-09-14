import React from "react";

const ShimmerSearchCard = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:mb-4 py-3 sm:py-0 w-screen sm:w-auto">
            {/* Thumbnail placeholder */}
            <div className="flex-shrink-0 w-full sm:w-[500px] aspect-[16/9] bg-[#333333] sm:rounded-xl"></div>

            {/* Video details placeholder */}
            <div className="sm:flex flex-col gap-8 px-3 sm:px-0 h-16 hidden w-[calc(100%-700px)] mt-1">
                <div className="flex flex-col gap-6 w-full">
                    <div className="h-7 bg-[#333333] rounded-md w-full"></div>
                    <div className="flex sm:flex-col gap-4 text-xs w-full pr-24">
                        <div className="flex items-center gap-6 w-full">
                            <div className="h-6 bg-[#333333] rounded-md w-1/2"></div>

                            <div className="h-6 bg-[#333333] rounded-md w-1/2"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8 w-full">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#333333] rounded-full"></div>
                    <div className="h-6 bg-[#333333] rounded-md w-64"></div>
                </div>
            </div>

            <div className="flex gap-3 px-3 sm:px-0 h-16 sm:hidden w-screen">
                <div className="w-10 h-10 flex-shrink-0 bg-[#333333] rounded-full"></div>
                <div className="flex flex-col gap-2 w-screen px-2">
                    <div className="h-5 bg-[#333333] rounded-md w-full"></div>
                    <div className="flex sm:flex-col gap-2 text-xs w-full pr-12">
                        <div className="text-[#333333] h-5 bg-[#333333] rounded-md w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShimmerSearchCard;
