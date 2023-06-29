import { Button_1 } from "../../../global/button-1/Button_1";

export const Hero = () => {
  return (
    <section className="bg-[#191919]">
      <div className="h-[32.375rem] sm:h-[39.938rem] lg:h-[45.625rem] lg:mx-[165px] bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-[center_top_-6.5rem] lg:bg-[bottom_right_-12rem] bg-no-repeat flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
        <span className="text-sm text-white text-opacity-50 tracking-[10px] font-normal">
          NEW PRODUCT
        </span>
        <h2 className="text-4xl sm:text-6xl sm:w-[24.75rem] text-white mt-4 sm:mt-6 font-bold">
          XX99 MARK II HEADPHONES
        </h2>
        <p className="text-[15px] mt-6 mb-7 sm:mb-10 w-[70%] lg:w-[21.813rem] sm:w-[45%] text-white text-opacity-75 font-medium">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button_1 />
      </div>
    </section>
  );
};
