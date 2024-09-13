import React from "react";
import { SearchIcon } from "../../assets/Icon";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearch, toggleShowSearch } from "../../redux/features/appSlice";

const SearchResult = () => {
    const suggestion = useSelector((state) => state.app.searchSuggestion);
    const dispatch = useDispatch();
    return (
        <div className="fixed flex flex-col top-[52px] z-50 bg-[#222222] w-[530px] py-[10px] rounded-xl h-screen sm:h-auto overflow-y-auto">
            {suggestion.map((item, index) => (
                <Link to={`results/${item}`} key={index}>
                    <div
                        className="flex gap-6 sm:gap-3  items-center px-6 sm:px-4 sm:py-1 py-[5px] hover:bg-[#383838]"
                        onClick={() => {
                            dispatch(setSearch(""));
                            dispatch(toggleShowSearch());
                        }}
                    >
                        <div className="w-5 h-5 mb-[6px]">
                            <SearchIcon className={"h-6 w-6 md:h-5 md:w-5"} />
                        </div>
                        <p className="text-[15px] truncate font-medium">
                            {item}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SearchResult;
