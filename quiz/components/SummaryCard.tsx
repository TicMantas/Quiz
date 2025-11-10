import Image from "next/image";
import Cravings from "../public/summary-icons/cravings-icon.png";
import Desire from "../public/summary-icons/desire-to-change.png";
import Mental from "../public/summary-icons/mental-block.png";
import Stress from "../public/summary-icons/stress-icon.png";
import ProgressBar from "./ProgressBar";

const SummaryCard = () => {
  const PersonalSummary = [
    {
      id: 1,
      condition: "VERY STRONG",
      comment: "Desire to change",
      percentage: 92,
      color: "#289F67",
      icon: Desire,
    },
    {
      id: 2,
      condition: "TOO HIGH",
      comment: "Cravings",
      percentage: 84,
      color: "#E35244",
      icon: Cravings,
    },
    {
      id: 3,
      condition: "TOO HIGH",
      comment: "Mental blocks",
      percentage: 74,
      color: "#E35244",
      icon: Mental,
    },
    {
      id: 4,
      condition: "MODERATELY HIGH",
      comment: "Stress",
      percentage: 52,
      color: "#FFC633",
      icon: Stress,
    },
  ];
  return (
    <>
      {PersonalSummary.map((summary) => (
        <div
          key={summary.id}
          className="flex border-[#767AF9] border px-3 py-4 rounded-lg items-center"
        >
          <div className="flex flex-1 gap-2.5 items-center">
            <Image
              src={summary.icon}
              alt={summary.comment}
              className="w-10 h-10"
            />

            <div className="flex flex-3 items-start flex-col gap-1">
              <p
                className={` px-1 py-0.5 bg-[${summary.color}] rounded-sm text-[10px] leading-3 text-white`}
              >
                {summary.condition}
              </p>
              <p className="font-bold text-md leading-5">{summary.comment}</p>
            </div>

            <div className="flex flex-3 items-center gap-3 ">
              <ProgressBar
                current={summary.percentage}
                color={summary.color}
                total={100}
                height={6}
              />
              <p className="font-bold text-sm leading-4">
                {summary.percentage}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SummaryCard;
