type Props = {
  current: number;
  total: number;
  color: string;
  height: number;
};

const ProgressBar = ({ current, total, color, height = 1}: Props) => {
  const percentage = (current / total) * 100;
  return (
    <div style={{
      height: height
    }} className={`w-full bg-[#E4E4E4] h-[${height}] rounded-full`}>
      <div
        className={` h-[${height}]  bg-[${color}] rounded-full`}
        style={{
          width: `${percentage}%`,
          height: height
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
