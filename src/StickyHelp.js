import React from "react";
import style from "./style.module.css";

const StickyHelp = () => {
  return (
    <div className="w-[20vw] mt-[-12vh] h-[10vh] z-2 absolute right-10 border-2 border-black">
      <div className={style.help}>123</div>
    </div>
  );
};

export default StickyHelp;
