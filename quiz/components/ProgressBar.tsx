import React from "react";

type Props = {
  current: number;
  total: number;
};

const ProgressBar = ({ current, total }: Props) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-[#E4E4E4] h-1  rounded-full">
      <div
        className=" h-1  bg-[#767AF9] rounded-full"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
