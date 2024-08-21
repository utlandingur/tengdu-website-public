import { useHeaderTheme } from "../providers/HeaderThemeProvider";

export const RegisterButtonHeader = () => {
  const { buttonTheme } = useHeaderTheme();
  return (
    <a href="mailto:info@tengdu.app">
      <button
        className={`text-md pl-3 pr-3 rounded-full font-bold ${buttonTheme}`}
      >
        Contact us
      </button>
    </a>
  );
};

export const RegisterButton = () => {
  return (
    <a href="mailto:info@tengdu.app">
      <button
        className={`text-md pl-12 pr-12 pt-1 pb-1 rounded-full font-bold bg-primaryBackground text-white hover:bg-black hover:text-white`}
      >
        Contact us
      </button>
    </a>
  );
};

export const AppStoreButton = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        margin: "2em",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: "fill" }}>
        <img
          src="/apple-appstore-badge.png"
          alt="Placeholder for App Store download badge"
          style={{ width: "160px", height: "55px" }}
        />
        {/* <div
          style={{
            position: "absolute",
            width: "160px",
            backgroundColor: "var(--placeholder)",
            height: "55px",
            zIndex: 1,
            top: 0,
            left: 0,
            opacity: 0.4,
            borderRadius: 8,
          }}
        /> */}
      </div>
      <p>(Coming soon to iOS)</p>
    </div>
  );
};
