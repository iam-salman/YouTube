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
    { name: "Home", icon: <HomeIcon /> },
    { name: "Shorts", icon: <ShortsIcon /> },
    {
        name: "Trending",
        icon: <TrendingIcon />,
    },
    { name: "Music", icon: <MusicIcon />, eventType: "none", videoType: "any" },
    {
        name: "Movies",
        icon: <MoviesIcon />,
    },
    { name: "Live", icon: <LiveIcon />, eventType: "live", videoType: "any" },
    {
        name: "Gaming",
        icon: <GamingIcon />,
    },
    { name: "News", icon: <NewsIcon />, eventType: "none", videoType: "any" },
    {
        name: "Sports",
        icon: <SportsIcon />,
    },
    {
        name: "Courses",
        icon: <CoursesIcon />,
    },
    {
        name: "Fashion & beauty",
        icon: <FashionBeautyIcon />,
    },
    {
        name: "Podcasts",
        icon: <PodcastIcon />,

        divider: true,
    },
    { name: "Settings", icon: <SettingIcon /> },
    { name: "Report History", icon: <ReportIcon /> },
    { name: "Help", icon: <HelpIcon /> },
    { name: "Send feedback", icon: <FeedbackIcon />, divider: true },
];
