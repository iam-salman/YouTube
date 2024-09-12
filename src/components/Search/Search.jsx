import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchData } from "../../utils/api";

const Search = () => {
    const [searchList, setSearchList] = useState([]);
    const expand = useSelector((state) => state.app.isExpand);

    const param = useParams().query;

    const fetchSearchData = async (query) => {
        try {
            const data = await fetchData("search", {
                part: "snippet",
                type: "video",
                q: query,
                maxResults: 48,
            });

            setSearchList(data?.items);

            console.log(data?.items);
        } catch (error) {
            console.error("Error in searching data", error);
        }
    };

    useEffect(() => {
        fetchSearchData(param);
    }, [param]);
    return (
        <div
            className={`${
                expand ? "md:w-[calc(100%-208px)]" : "md:w-[calc(100%-64px)]"
            } h-screen overflow-y-auto flex  flex-col md:px-16 py-1 sm:pt-3 scrollbar-thin pb-16`}
        >
            {searchList.map((item) => (
                <Link
                    to={`/watch/${item?.id?.videoId}`}
                    key={item?.id?.videoId}
                >
                    <SearchCard item={item} />
                </Link>
            ))}
        </div>
    );
};

export default Search;
