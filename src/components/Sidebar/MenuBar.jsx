import {
    Add,
    HomeIcon,
    ShortsIcon,
    SubscriptionIcon,
    YouIcon,
} from "../../assets/Icon";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="w-screen md:w-12 md:py-2 md:gap-7 md:mr-4 px-4 py-1 md:flex-col flex justify-between items-center bg-black border-t border-[#333333] md:border-t-0">
            <Link to="/home">
                <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                    <HomeIcon aria-label="Home" />
                    <p className="text-[9px] md:text-[10px]">Home</p>
                </div>
            </Link>

            <Link to="/shorts">
                <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                    <ShortsIcon aria-label="Shorts" />
                    <p className="text-[9px] md:text-[10px]">Shorts</p>
                </div>
            </Link>

            <div className="bg-[#222222] h-8 w-8 rounded-full flex items-center justify-center sm:hidden">
                <Add aria-label="Add" />
            </div>

            <Link to="subscriptions">
                <div className="flex flex-col justify-center items-center sm:gap-2 gap-1 w-8">
                    <SubscriptionIcon aria-label="Subscriptions" />
                    <p className="text-[9px] md:text-[10px]">Subscriptions</p>
                </div>
            </Link>
            <Link to="you">
                <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                    <YouIcon aria-label="You" />
                    <p className="text-[9px] md:text-[10px]">You</p>
                </div>
            </Link>
        </div>
    );
};

export default MenuBar;
