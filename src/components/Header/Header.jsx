import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "../../shared/Loader";
import user from "../../assets/User.png";
import { toggleMenu } from "../../redux/features/appSlice";

import {
    Add,
    HamBurgerMenu,
    MicIcon,
    NotificationIcon,
    SearchIcon,
    UploadVideoIcon,
    YouTubeLogo,
} from "../../assets/Icon";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full bg-black flex items-center justify-between md:px-6 px-5 py-3 md:h-14 h-16">
            <div className="flex gap-6 items-center justify-center flex-row">
                <div
                    className="cursor-pointer hidden md:block"
                    onClick={() => dispatch(toggleMenu())}
                >
                    <HamBurgerMenu />
                </div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-class" : "inactive-class"
                    }
                >
                    <YouTubeLogo />
                </NavLink>
            </div>

            <div className="flex items-center justify-center gap-4 ">
                <div className="flex items-center justify-center h-full">
                    <input
                        type="text"
                        className="hidden md:block border-2 bg-black border-[#222222] px-5 py-[7px] rounded-l-3xl w-[530px] outline-none focus:border-blue-500"
                        placeholder="Search"
                    />
                    <button className="md:border md:border-[#222222] md:bg-[#222222] md:px-5 md:py-2 rounded-r-3xl">
                        <SearchIcon />
                    </button>
                </div>

                <div className="bg-[#222222] rounded-full md:flex items-center justify-center h-10 w-10 hidden">
                    <MicIcon />
                </div>
            </div>
            <div className="md:flex items-center gap-6 hidden">
                <div className="flex justify-center items-center gap-2 bg-[#222222] px-3 py-[6px] rounded-full">
                    <Add />
                    <span className="bg-transparent text-sm font-medium ">
                        Create
                    </span>
                </div>
                <NotificationIcon />
                <div className="pr-6">
                    <img src={user} className="w-8 h-8 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;
