import {
    Add,
    HomeIcon,
    ShortsIcon,
    SubscriptionIcon,
    YouIcon,
} from "../../assets/Icon";

const MenuBar = () => {
    return (
        <div className="w-screen md:w-12 md:py-2 md:gap-7 md:mr-4 px-4 py-1 md:flex-col flex justify-between items-center bg-black border-t border-[#333333]">
            <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                <HomeIcon aria-label="Home" />
                <p className="text-xs md:text-[10px]">Home</p>
            </div>

            <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                <ShortsIcon aria-label="Shorts" />
                <p className="text-xs md:text-[10px]">Shorts</p>
            </div>

            <div className="bg-[#222222] h-8 w-8 rounded-full flex items-center justify-center">
                <Add aria-label="Add" />
            </div>

            <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                <SubscriptionIcon aria-label="Subscriptions" />
                <p className="text-xs md:text-[10px]">Subscriptions</p>
            </div>

            <div className="flex flex-col justify-center items-center sm:gap-2 gap-1">
                <YouIcon aria-label="You" />
                <p className="text-xs md:text-[10px]">You</p>
            </div>
        </div>
    );
};

export default MenuBar;
