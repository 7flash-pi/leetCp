import React from "react";

type Props = {
  filled: boolean;
  handleClick: () => void;
  isDisabled: boolean;
};

const Cell = ({ filled, handleClick, isDisabled }: Props) => {
  return (
    <div
      onClick={handleClick}
      className={`bg-transparent height-[0] pb-[100%] rounded-lg border border-[#000] ${
        filled ? "!bg-[#2eb036] " : "!bg-[#fff]"
      }`}
      style={ { pointerEvents:`${isDisabled ? 'none':'initial'}`}}
    ></div>
  );
};

export default Cell;
