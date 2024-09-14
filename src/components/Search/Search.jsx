import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import ShimmerSearchCard from "../../shared/ShimmerSearchCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchData } from "../../utils/api";
import { setLoader } from "../../redux/features/appSlice";

const Search = () => {
    const [searchList, setSearchList] = useState([]);

    const expand = useSelector((state) => state.app.isExpand);
    const isLoading = useSelector((state) => state.app.loading);
    const param = useParams().query;

    const dispatch = useDispatch();

    const fetchSearchData = async (query) => {
        dispatch(setLoader());
        try {
            const data = await fetchData("search", {
                part: "snippet",
                type: "video",
                q: query,
                maxResults: 48,
            });

            setSearchList(data?.items);
        } catch (error) {
            console.error("Error in searching data", error);
        } finally {
            dispatch(setLoader());
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchSearchData(param);
    }, [param]);

    return (
        <div
            className={`${
                expand ? "md:w-[calc(100%-208px)]" : "md:w-[calc(100%-64px)]"
            } h-screen overflow-y-auto flex flex-col md:px-16 py-1 sm:pt-3 scrollbar-thin pb-16`}
        >
            {isLoading
                ? Array.from({ length: 12 }).map((_, index) => (
                      <ShimmerSearchCard key={index} />
                  ))
                : searchList.map((item) => (
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
