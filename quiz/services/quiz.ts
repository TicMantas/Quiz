import healthIcon from "../public/icons/health.png";
import healthIconWhite from "../public/white-icons/health.png";
import relationshipIcon from "../public/icons/relationship.png";
import relationshipIconWhite from "../public/white-icons/relationship.png";
import controlIcon from "../public/icons/control.png";
import controlIconWhite from "../public/white-icons/control.png";
import moneyIcon from "../public/icons/money.png";
import moneyIconWhite from "../public/white-icons/money.png";
import performanceIcon from "../public/icons/performance.png";
import performanceIconWhite from "../public/white-icons/performance.png";
import roleModelIcon from "../public/icons/role-model.png";
import roleModelIconWhite from "../public/white-icons/role-model.png";
import stressIcon from "../public/icons/stress.png";
import stressIconWhite from "../public/white-icons/stress.png";
import socialIcon from "../public/icons/social.png";
import socialIconWhite from "../public/white-icons/social.png";
import relaxIcon from "../public/icons/relax.png";
import relaxIconWhite from "../public/white-icons/relax.png";
import emotionalIcon from "../public/icons/emotion.png";
import emotionalIconWhite from "../public/white-icons/emotion.png";
import habitIcon from "../public/icons/habit.png";
import habitIconWhite from "../public/white-icons/habit.png";
import confidenceIcon from "../public/icons/confidence.png";
import confidenceIconWhite from "../public/white-icons/confidence.png";
import yesIcon from "../public/white-icons/yes.png";
import noIcon from "../public/white-icons/no.png";
import notSureIcon from "../public/white-icons/not-sure.png";
// colored
import noColoredIcon from "../public/icons/no-colored.png";
import yesColoredIcon from "../public/icons/yes-colored.png";
import notSureColoredIcon from "../public/icons/not-sure-colored.png";

export const quiz = [
  {
    id: 1,
    question: "What is your main reason for wanting to quit drinking?",
    options: [
      {
        id: 1,
        icon: healthIconWhite,
        coloredIcon: healthIcon,
        label: "Health",
      },
      {
        id: 2,
        icon: relationshipIconWhite,
        coloredIcon: relationshipIcon,
        label: "Relationships",
      },
      {
        id: 3,
        icon: controlIconWhite,
        coloredIcon: controlIcon,
        label: "Control",
      },
      { id: 4, icon: moneyIconWhite, coloredIcon: moneyIcon, label: "Money" },
      {
        id: 5,
        icon: performanceIconWhite,
        coloredIcon: performanceIcon,
        label: "Performance",
      },
      {
        id: 6,
        icon: roleModelIconWhite,
        coloredIcon: roleModelIcon,
        label: "Role model",
      },
    ],
  },
  {
    id: 2,
    question: "What do you think is the main reason you drink?",
    options: [
      {
        id: 1,
        icon: stressIconWhite,
        coloredIcon: stressIcon,
        label: "Stress or anxiety",
      },
      {
        id: 2,
        icon: socialIconWhite,
        coloredIcon: socialIcon,
        label: "Socializing",
      },
      {
        id: 3,
        icon: relaxIconWhite,
        coloredIcon: relaxIcon,
        label: "Relaxation",
      },
      {
        id: 4,
        icon: emotionalIconWhite,
        coloredIcon: emotionalIcon,
        label: "Emotional escape",
      },
      { id: 5, icon: habitIconWhite, coloredIcon: habitIcon, label: "Habit" },
      {
        id: 6,
        icon: confidenceIconWhite,
        coloredIcon: confidenceIcon,
        label: "Confidence boost",
      },
    ],
  },
  {
    id: 3,
    question: 'Do you ever drink to feel "normal" or fit in with others?',
    options: [
      { id: 1, icon: yesIcon, coloredIcon: yesColoredIcon, label: "Yes" },
      {
        id: 2,
        icon: notSureIcon,
        coloredIcon: notSureColoredIcon,
        label: "I'm not sure",
      },
      { id: 3, icon: noIcon, coloredIcon: noColoredIcon, label: "No" },
    ],
  },
  {
    id: 4,
    question:
      "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
    options: [
      { id: 1, icon: yesIcon, coloredIcon: yesColoredIcon, label: "Yes" },
      {
        id: 2,
        icon: notSureIcon,
        coloredIcon: notSureColoredIcon,
        label: "I'm not sure",
      },
      { id: 3, icon: noIcon, coloredIcon: noColoredIcon, label: "No" },
    ],
  },
  {
    id: 5,
    question:
      "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
    options: [
      { id: 1, icon: yesIcon, coloredIcon: yesColoredIcon, label: "Yes" },
      {
        id: 2,
        icon: notSureIcon,
        coloredIcon: notSureColoredIcon,
        label: "I'm not sure",
      },
      { id: 3, icon: noIcon, coloredIcon: noColoredIcon, label: "No" },
    ],
  },
  {
    id: 6,
    question:
      "Do you often seek ways to relax or unwind after a long, stressful day?",
    options: [
      { id: 1, icon: yesIcon, coloredIcon: yesColoredIcon, label: "Yes" },
      {
        id: 2,
        icon: notSureIcon,
        coloredIcon: notSureColoredIcon,
        label: "I'm not sure",
      },
      { id: 3, icon: noIcon, coloredIcon: noColoredIcon, label: "No" },
    ],
  },
];
