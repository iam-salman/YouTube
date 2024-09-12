import { LeftArrow, SearchIcon } from "../../assets/Icon";

const SearchBar = ({
    search,
    setSearch,
    handleKeyDown,
    handleSearch,
    setShowSearch,
}) => {
    return (
        <div className="flex items-center justify-center gap-2 py-3 w-full px-5">
            <button className="">
                <LeftArrow />
            </button>

            <input
                type="text"
                className="block border-2 bg-[#222222] border-[#222222] px-5 py-1 rounded-3xl w-[530px] outline-none focus:border-blue-500"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="" onClick={handleSearch}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchBar;
