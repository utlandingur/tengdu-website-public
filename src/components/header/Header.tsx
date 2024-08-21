import { HamburgerMenu } from "./HamburgerMenu";
import HeaderLogo from "./HeaderLogo";
import { RegisterButtonHeader } from "../downloadButtons";
import { useIsHeroInView } from "../../Hooks/useIsHeroInView";
import { HeaderThemeProvider } from "../../providers/HeaderThemeProvider";

const Header = () => {
  const isHeroInView = useIsHeroInView();

  return (
    <HeaderThemeProvider>
      <header
        className={`fixed z-50 w-full top-0 left-0 right-0 bg-black ${
          isHeroInView ? "bg-opacity-10 bg-black" : "bg-white"
        }`}
      >
        <nav className="flex items-center justify-between pl-3 pr-3 pt-2 pb-2">
          <div className="flex flex-1">
            <HamburgerMenu />
          </div>
          <HeaderLogo />
          <div className="flex flex-1 justify-end z-50">
            <RegisterButtonHeader />
          </div>
        </nav>
      </header>
    </HeaderThemeProvider>
  );
};

export default Header;
