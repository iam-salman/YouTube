import React from "react";
import Home from "./pages/Home/Home";
import Header from "../src/components/Header/Header";
import SideBar from "../src/components/Sidebar/SideBar";
import MenuBar from "./components/Sidebar/MenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoCard from "./components/VideoCard/VideoCard";
import ContentItem from "./pages/VideoDetail/ContentItem";
import Search from "./components/Search/Search";
import Category from "./pages/Category/Category";

const App = () => {
    return (
        <BrowserRouter>
            <div className="w-screen h-screen fixed">
                <Header />
                <div className="flex gap-2">
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:category" element={<Category />} />
                        <Route
                            path="/video/:id"
                            element={
                                <div>
                                    <VideoCard />
                                    {/* More VideoCards */}
                                </div>
                            }
                        />
                        <Route path="/watch/:id" element={<ContentItem />} />
                        <Route path="/results/:query" element={<Search />} />
                        <Route path="*" element={<Home />} />{" "}
                        {/* Catch-all route */}
                    </Routes>
                </div>
                <div className="fixed bottom-0 sm:hidden">
                    <MenuBar />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
