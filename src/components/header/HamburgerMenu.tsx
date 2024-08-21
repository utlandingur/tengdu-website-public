import { useEffect } from "react";
import { useHeaderTheme } from "../../providers/HeaderThemeProvider";

export const HamburgerMenu = () => {
  const { textTheme, isTrayOpen, setIsTrayOpen } = useHeaderTheme();

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (isTrayOpen) {
      bodyElement?.classList.add("overflow-hidden");
    } else {
      bodyElement?.classList.remove("overflow-hidden");
    }
  }, [isTrayOpen]);

  return (
    <>
      <button
        onClick={() => setIsTrayOpen(!isTrayOpen)}
        className="flex items-center justify-center z-50"
        aria-label="Open menu"
      >
        <span
          className={`iconify material-symbols--menu-rounded text-4xl ${textTheme} `}
        ></span>
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black z-30 transform transition-transform duration-200 ease-in-out ${
          isTrayOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20">
          <HamburgerMenuItem linkName="home" link="/" />
          <HamburgerMenuItem linkName="blog" />
          <HamburgerMenuItem linkName="team" />
        </div>
      </div>
    </>
  );
};

interface HamburgerMenuItemProps {
  linkName: string;
  link?: string;
}

const HamburgerMenuItem = ({ linkName, link }: HamburgerMenuItemProps) => {
  return (
    <a
      aria-label={`Go to ${linkName[0].toUpperCase() + linkName.slice(1)} page`}
      className="ml-6 mr-6 nunito text-4xl text-white block border-b border-stone-25/20 py-7 hover:text-primaryBackground"
      href={link ?? `/${linkName}`}
    >
      {linkName[0].toUpperCase() + linkName.slice(1)}
    </a>
  );
};

const Seperator = () => {
  return (
    <div className="border border-t-0 border-b-1  border pl-4 border-red" />
  );
};
