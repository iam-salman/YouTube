import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isExpand: false,
        loading: false,
        homeVideo: [],
        searchSuggestion: [],
        search: "", // added search
        showSearch: false, // added showSearch
    },

    reducers: {
        toggleMenu: (state) => {
            state.isExpand = !state.isExpand;
        },
        setLoader: (state) => {
            state.loading = !state.loading;
        },
        setHomeVideo: (state, action) => {
            state.homeVideo = action.payload;
        },
        setSearchSuggestion: (state, action) => {
            state.searchSuggestion = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload; // new reducer for search
        },
        toggleShowSearch: (state) => {
            state.showSearch = !state.showSearch; // new reducer to toggle showSearch
        },
    },
});

export const {
    toggleMenu,
    setLoader,
    setHomeVideo,
    setSearchSuggestion,
    setSearch,
    toggleShowSearch,
} = appSlice.actions;

export default appSlice.reducer;
