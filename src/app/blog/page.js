"use client";
import { CallUsNow, FaqSection } from "../components/shared"
import BlogHeader from "./BlogHeader";
import { BlogSection } from "../components/shared";
import { CARDSDATA2 } from "../components/constants/constants";


const Blog = () => {
    return (
        <>
        <BlogHeader/>
        <BlogSection cardsData={CARDSDATA2}/>
        <CallUsNow/>
        <FaqSection/>
        </>
    )
}

export default Blog