"use client";

import { CallUsNow, ShareForm, FaqSection } from "../components/shared";
import AboutStory from "./AboutStory";
import Values from "./Values";

const About = () => {


  return (
    <>
      <AboutStory />
      <Values />
      <ShareForm pt="150px" />
      <CallUsNow />
      <FaqSection />
    </>
  )
}

export default About