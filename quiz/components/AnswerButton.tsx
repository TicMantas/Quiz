import { IconKey, iconMap } from "@/services/quiz";

type Props = {
  id: number;
  label: string;
  icon: IconKey;
  selectedAnswer: number | undefined;
  index: number;
  color: string;
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
  selectedAnswer,
  index,
  color,
  quizId,
  onClick,
}: Props) => {
  const IconComponent = iconMap[icon];
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
      <IconComponent
        size={quizId < 3 ? 24 : 16}
        color={selectedAnswer === id ? "white" : color}
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
