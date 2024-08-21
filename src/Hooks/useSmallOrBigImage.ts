import { useEffect } from "react";
import useWindowWidth from "../Hooks/useWindowWidth";

export const useSmallOrBigImageURL = (
  smallUrl: string,
  bigUrl: string
): string => {
  const windowWidth = useWindowWidth();
  const Url = windowWidth > 640 ? bigUrl : smallUrl;

  return Url;
};

export const useBigImage = (): boolean => {
  console.log("loaded");
  const windowWidth = useWindowWidth();

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);
  return windowWidth > 640 ? true : false;
};
