import {
    HomeIcon,
    ShortsIcon,
    SubscriptionIcon,
    YouIcon,
} from "../../assets/Icon";

const MenuBar = () => {
    return (
        <div className="w-screen md:w-12 md:py-2 md:gap-7 md:mr-4 px-4 py-3 md:flex-col flex justify-between items-center bg-black">
            <div className="flex flex-col justify-center items-center gap-2">
                <HomeIcon />
                <p className="text-[10px] hidden md:block text-white">Home</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <ShortsIcon />
                <p className="text-[10px] hidden md:block">Shorts</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <SubscriptionIcon />
                <p className="text-[10px] hidden md:block">Subscriptions</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <YouIcon />
                <p className="text-[10px] hidden md:block">You</p>
            </div>
        </div>
    );
};

export default MenuBar;
