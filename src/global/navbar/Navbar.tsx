import burgerButton from "../../assets/assets/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/assets/shared/desktop/logo.svg";
import cart from "../../assets/assets/shared/desktop/icon-cart.svg";

export const Navbar = () => {
  return (
    <section className="bg-[#191919] h-[89px] flex items-center border-b border-white border-opacity-10 sm:border-none">
      <div className="flex items-center justify-between mx-6 w-full h-full sm:mx-[39px] sm:border-b sm:border-white sm:border-opacity-10 lg:mx-[165px]">
        <img className="sm:absolute lg:hidden" src={burgerButton} />
        <img className="sm:ml-[73px] lg:ml-0" src={logo} />
        <ul className="hidden text-[13px] text-white font-bold lg:flex gap-[34px]">
          <li className="hover:text-[#D87D4A]">HOME</li>
          <li className="hover:text-[#D87D4A]">HEADPHONES</li>
          <li className="hover:text-[#D87D4A]">SPEAKERS</li>
          <li className="hover:text-[#D87D4A]">EARPHONES</li>
        </ul>
        <img src={cart} />
      </div>
    </section>
  );
};
