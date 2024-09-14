import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import user from "../../assets/User.png";
import {
    setSearchSuggestion,
    toggleMenu,
    setSearch,
    toggleShowSearch,
} from "../../redux/features/appSlice";

import {
    Add,
    HamBurgerMenu,
    MicIcon,
    NotificationIcon,
    SearchIcon,
    YouTubeLogo,
} from "../../assets/Icon";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../../pages/Search/SearchResult";
import SearchBar from "../../pages/Search/SearchBar";

const Header = () => {
    const search = useSelector((state) => state.app.search);
    const showSearch = useSelector((state) => state.app.showSearch);
    const suggestion = useSelector((state) => state.app.searchSuggestion);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function fetchSuggestions(query) {
        const apiUrl = `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&tok=Sx7Rr0BXH_F6H3xtlEEt3A&ds=yt&cp=2&gs_id=16&q=${query}&callback=google.sbox.p50&gs_gbg=SFfVQC7`;

        return axios
            .get(apiUrl)
            .then((response) => {
                const jsonString = response?.data?.replace(
                    /^[^(]*\(|\);?$/g,
                    ""
                );

                const jsonData = JSON.parse(jsonString);

                const suggestions = jsonData[1].map((item) => item[0]);

                dispatch(setSearchSuggestion(suggestions));
            })
            .catch((error) => {
                console.error("Error fetching suggestions:", error);
                throw error;
            });
    }

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/results/${search}`);
            dispatch(setSearch("")); // Clear search input after navigation
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
            dispatch(toggleShowSearch());
        }
    };

    useEffect(() => {
        if (!search) {
            dispatch(setSearchSuggestion([]));
            return;
        }

        const tid = setTimeout(() => {
            fetchSuggestions(search);
        }, 200);

        return () => {
            clearTimeout(tid);
        };
    }, [search]);

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
                <div className="md:flex flex-col hidden">
                    <div className="flex items-center justify-center h-full">
                        <input
                            type="text"
                            className="hidden md:block border-2 bg-black border-[#222222] px-5 py-[7px] rounded-l-3xl w-[530px] outline-none focus:border-blue-500"
                            placeholder="Search"
                            value={search}
                            onChange={(e) =>
                                dispatch(setSearch(e.target.value))
                            }
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="md:border md:border-[#222222] md:bg-[#222222] md:px-5 md:py-2 rounded-r-3xl"
                            onClick={handleSearch}
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    {suggestion.length !== 0 && <SearchResult />}
                </div>

                <button
                    className="sm:hidden rounded-r-3xl"
                    onClick={() => dispatch(toggleShowSearch())}
                >
                    <SearchIcon />
                </button>

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
            {showSearch && (
                <div className="bg-[#151515] z-30 fixed inset-0 w-full h-full sm:hidden">
                    <SearchBar
                        handleSearch={handleSearch}
                        handleKeyDown={handleKeyDown}
                    />
                    {suggestion?.length !== 0 && showSearch && <SearchResult />}
                </div>
            )}
        </div>
    );
};

export default Header;
