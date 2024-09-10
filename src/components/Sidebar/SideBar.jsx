import { useState } from "react";
import { HamBurgerMenu, YouTubeLogo } from "../../assets/Icon";
import { categories } from "../../utils/constants";

import { Link, useLocation } from "react-router-dom";
import MenuBar from "./MenuBar";
import { useSelector } from "react-redux";

const SideBar = () => {
    const expand = useSelector((state) => state.app.isExpand);

    return (
        <div className="h-screen pl-[14px] pr-2 pt-3 pb-6  overflow-y-auto scrollbar-thin hidden md:block">
            {expand ? (
                <div className="w-52 pb-14">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex items-center gap-6 px-3 py-2 hover:bg-[#222222] rounded-lg"
                        >
                            {item.icon}
                            <p className="text-sm font-medium">{item.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <MenuBar />
            )}
        </div>
    );
};

export default SideBar;
