import { CallUsNow, FaqSection } from "../components/shared";
import BlogHeader from "./BlogHeader";
import { SingleImageText } from "../components/shared";
import BlogBody from "./BlogBody";

export default async function Blog() {
  return (
    <>
      <SingleImageText section="blog" img="/headerImages/blog.webp" />
      <BlogHeader />
      <BlogBody />
      <CallUsNow />
      <FaqSection />
    </>
  );
}
