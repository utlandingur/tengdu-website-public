import { Picture } from "./Picture";
import { HERO } from "../consts";

function Hero() {
  return (
    <div
      className="h-[95vh] flex justify-center relative overflow-hidden"
      id="hero"
    >
      <div className="bg-black bg-opacity-60 self-end w-full px-6 z-10 relative">
        <div className="max-w-3xl mx-auto pt-2 pb-8 z-0 relative">
          <h1 className="text-white font-nunito-sans">
            Find Real Friends With{" "}
            <span className="text-primaryBackground">Tengdu</span>
          </h1>
        </div>
      </div>
      <Picture image={HERO} className="absolute inset-0" />
    </div>
  );
}
export default Hero;
