import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftArrow, SearchIcon } from "../../assets/Icon";
import { setSearch, toggleShowSearch } from "../../redux/features/appSlice";

const SearchBar = ({ handleKeyDown, handleSearch }) => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.app.search);

    // Create a ref to the input element
    const inputRef = useRef(null);

    // Focus the input when the component mounts or when 'showSearch' changes
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className="flex items-center justify-center gap-3 py-3 w-full px-4">
            <button className="" onClick={() => dispatch(toggleShowSearch())}>
                <LeftArrow />
            </button>

            <input
                ref={inputRef} // Attach the ref to the input
                type="text"
                className="block border-2 bg-[#222222] border-[#222222] px-4 py-1 rounded-3xl w-[530px] outline-none focus:border-blue-500"
                placeholder="Search"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchBar;
