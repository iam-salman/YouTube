import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isExpand: false,

        loading: false,
        homeVideo: [],
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
    },
});

export const { toggleMenu, setLoader, setHomeVideo } = appSlice.actions;

export default appSlice.reducer;
