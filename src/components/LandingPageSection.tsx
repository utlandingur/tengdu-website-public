import { Picture } from "./Picture";
import type { Image } from "./Picture";

interface LandingPageSectionProps {
  title: string;
  content: string;
  image: Image;
  imageOnLeft?: boolean;
}

export const LandingPageSection = ({
  title,
  content,
  image,
  imageOnLeft = false,
}: LandingPageSectionProps) => {
  console.log("loaded");
  return (
    <article aria-labelledby="article-title">
      <h2 id="article-title" className="text-2xl font-bold font-nunito-sans">
        {title}
      </h2>
      <p>{content}</p>
      <div className="flex justify-center pt-8">
        <Picture image={image} className="w-3/4" />
      </div>
    </article>
  );
};
