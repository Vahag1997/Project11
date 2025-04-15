import {
  CallUsNow,
  ShareForm,
  FaqSection,
  SingleImageText,
} from "../components/shared";
import AboutStory from "./AboutStory";
import Values from "./Values";

const About = () => {
  return (
    <>
      <SingleImageText section="about" img="/headerImages/about.webp" />
      <AboutStory />
      <Values />
      <ShareForm />
      <CallUsNow />
      <FaqSection />
    </>
  );
};

export default About;
