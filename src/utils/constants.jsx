import React from "react";

import {
    CoursesIcon,
    FashionBeautyIcon,
    FeedbackIcon,
    GamingIcon,
    HelpIcon,
    HomeIcon,
    LiveIcon,
    MoviesIcon,
    MusicIcon,
    NewsIcon,
    ReportIcon,
    PodcastIcon,
    SettingIcon,
    SportsIcon,
    TrendingIcon,
    ShortsIcon,
} from "../assets/Icon";

export const categories = [
    {
        name: "Home",
        icon: <HomeIcon />,
        videoType: "any", // Fetches new or popular videos from all categories
    },
    {
        name: "Shorts",
        icon: <ShortsIcon />,
        videoType: "short",
        videoCategoryId: 42, // Shorts
    },
    {
        name: "Trending",
        icon: <TrendingIcon />,
        videoType: "any", // Trending is across all categories, so no specific videoCategoryId
    },
    {
        name: "Music",
        icon: <MusicIcon />,
        eventType: "none",
        videoType: "any",
        videoCategoryId: 10, // Music
    },
    {
        name: "Movies",
        icon: <MoviesIcon />,
        videoType: "movie",
        videoCategoryId: 30, // Movies
    },
    {
        name: "Live",
        icon: <LiveIcon />,
        eventType: "live",
        videoType: "live",
        videoCategoryId: 25, // News & Politics (as live streams commonly fit here)
    },
    {
        name: "Gaming",
        icon: <GamingIcon />,
        videoType: "any",
        videoCategoryId: 20, // Gaming
    },
    {
        name: "News",
        icon: <NewsIcon />,
        eventType: "none",
        videoType: "any",
        videoCategoryId: 25, // News & Politics
    },
    {
        name: "Sports",
        icon: <SportsIcon />,
        videoType: "any",
        videoCategoryId: 17, // Sports
    },
    {
        name: "Courses",
        icon: <CoursesIcon />,
        videoType: "any",
        videoCategoryId: 27, // Education
    },
    {
        name: "Fashion & Beauty",
        icon: <FashionBeautyIcon />,
        videoType: "any",
        videoCategoryId: 26, // Howto & Style
    },

    {
        name: "Settings",
        icon: <SettingIcon />,
    },
    {
        name: "Report History",
        icon: <ReportIcon />,
    },
    {
        name: "Help",
        icon: <HelpIcon />,
    },
    {
        name: "Send feedback",
        icon: <FeedbackIcon />,
        divider: true,
    },
];

export const categoriesObject = {
    Home: {
        name: "Home",
        icon: <HomeIcon />,
        videoType: "any",
        eventType: "none",
    },
    Shorts: {
        name: "Shorts",
        icon: <ShortsIcon />,
        videoType: "short",
        videoCategoryId: 42,
        eventType: "none",
    },
    Trending: {
        name: "Trending",
        icon: <TrendingIcon />,
        videoType: "any",
        eventType: "none",
    },
    Music: {
        name: "Music",
        icon: <MusicIcon />,
        eventType: "none",
        videoType: "any",
        videoCategoryId: 10,
    },
    Movies: {
        name: "Movies",
        icon: <MoviesIcon />,
        videoType: "movie",
        eventType: "none",
        videoCategoryId: 30,
    },
    Live: {
        name: "Live",
        icon: <LiveIcon />,
        eventType: "live",
        videoType: "live",
        videoCategoryId: 25,
    },
    Gaming: {
        name: "Gaming",
        icon: <GamingIcon />,
        videoType: "any",
        videoCategoryId: 20,
        eventType: "none",
    },
    News: {
        name: "News",
        icon: <NewsIcon />,
        eventType: "none",
        videoType: "any",
        videoCategoryId: 25,
    },
    Sports: {
        name: "Sports",
        icon: <SportsIcon />,
        videoType: "any",
        videoCategoryId: 17,
        eventType: "none",
    },
    Courses: {
        name: "Courses",
        icon: <CoursesIcon />,
        videoType: "any",
        videoCategoryId: 27,
        eventType: "none",
    },
    "Fashion & Beauty": {
        name: "Fashion & Beauty",
        icon: <FashionBeautyIcon />,
        videoType: "any",
        videoCategoryId: 26,
        eventType: "none",
    },
};
