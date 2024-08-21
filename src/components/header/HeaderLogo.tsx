import { SITE_NAME } from "../../consts";
import { useHeaderTheme } from "../../providers/HeaderThemeProvider";

const HeaderLogo = () => {
  const { textTheme } = useHeaderTheme();

  return (
    <div className="text-base flex flex-1 justify-center m-0 z-50">
      <h2>
        <a
          href="/"
          className={`text-3xl font-black no-underline ${textTheme} font-nunito-sans`}
        >
          {SITE_NAME}
        </a>
      </h2>
    </div>
  );
};

export default HeaderLogo;
