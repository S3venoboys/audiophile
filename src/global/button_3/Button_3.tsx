import arrow from "../../assets/assets/shared/desktop/icon-arrow-right.svg";

export const Button_3 = () => {
  return (
    <button className="h-[48px] w-[160px] flex justify-center items-center gap-[0.832rem] group">
      <div className="text-[13px] font-bold text-black opacity-50 group-hover:text-[#D87D4A] group-hover:opacity-100">
        SHOP
      </div>
      <span>
        <img className="h-full" src={arrow} />
      </span>
    </button>
  );
};
