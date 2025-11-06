import { quiz } from "@/services/quiz";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  id: number;
  label: string;
  icon: StaticImageData;
  coloredIcon: StaticImageData;
  selectedAnswer: number | undefined;
  index: number;
  quizId: number;
  onClick: () => void;
};

const borderColors = [
  "border-[#289F67]",
  "border-[#FFC633]",
  "border-[#E35244]",
];
const backgroundColors = ["bg-[#289F67]", "bg-[#FFC633]", "bg-[#E35244]"];

const AnswerButton = ({
  id,
  label,
  icon,
  coloredIcon,
  selectedAnswer,
  index,
  quizId,
  onClick,
}: Props) => {
  return (
    <button
      key={id}
      className={`flex rounded-lg items-center leading-5.5 py-4 border px-3 text-start gap-3
        ${
          quizId < 3
            ? selectedAnswer === id
              ? "bg-[#767AF9]"
              : "bg-white"
            : selectedAnswer === id
            ? backgroundColors[index]
            : "bg-white"
        }
        ${quizId < 3 ? "border-[#F1F1F1]" : borderColors[index]}
      `}
      onClick={onClick}
    >
      <Image
        src={selectedAnswer === id ? icon : coloredIcon}
        alt={label}
        className={`${quizId < 3 ? "h-6 w-6" : "h-4 w-4"} object-contain`}
      />
      <span
        className={`font-semibold ${
          selectedAnswer === id ? "text-white" : "text-[#303030]"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default AnswerButton;
