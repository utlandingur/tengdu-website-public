import { useState, useEffect } from "react";

export const useIsHeroInView = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (!heroElement) {
      setIsHeroInView(false);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      setIsHeroInView(entries[0].isIntersecting);
    });

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return isHeroInView;
};
