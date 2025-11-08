import Confidence from "@/components/icons/Confidence";
import { Control } from "@/components/icons/Control";
import Emotional from "@/components/icons/Emotional";
import Habit from "@/components/icons/Habit";
import Health from "@/components/icons/Health";
import Money from "@/components/icons/Money";
import NoIcon from "@/components/icons/NoIcon";
import NotSureIcon from "@/components/icons/NotSureIcon";
import Performance from "@/components/icons/Performance";
import Relationship from "@/components/icons/Relationship";
import Relaxation from "@/components/icons/Relaxation";
import RoleModel from "@/components/icons/RoleModel";
import Socializing from "@/components/icons/Socializing";
import { Stress } from "@/components/icons/Stress";
import YesIcon from "@/components/icons/YesIcon";

export const iconMap = {
  performance: Performance,
  health: Health,
  relationship: Relationship,
  control: Control,
  money: Money,
  roleModel: RoleModel,
  stress: Stress,
  socializing: Socializing,
  relaxation: Relaxation,
  emotional: Emotional,
  habit: Habit,
  confidence: Confidence,
  yes: YesIcon,
  no: NoIcon,
  notSure: NotSureIcon
};

type Quiz = {
  id: number;
  question: string;
  options: QuizOption[];
};

type QuizOption = {
  id: number;
  icon: IconKey;
  label: string;
  color: string;
};

export type IconKey = keyof typeof iconMap;

export const quiz: Quiz[] = [
  {
    id: 1,
    question: "What is your main reason for wanting to quit drinking?",
    options: [
      {
        id: 1,
        icon: "health",
        label: "Health",
        color: "#303030",
      },
      {
        id: 2,
        icon: "relationship",
        label: "Relationships",
        color: "#303030",
      },
      {
        id: 3,
        icon: "control",
        label: "Control",
        color: "#303030",
      },
      { id: 4, icon: "money", label: "Money", color: "#303030" },
      {
        id: 5,
        icon: "performance",
        label: "Performance",
        color: "#303030",
      },
      {
        id: 6,
        icon: "roleModel",
        label: "Role model",
        color: "#303030",
      },
    ],
  },
  {
    id: 2,
    question: "What do you think is the main reason you drink?",
    options: [
      {
        id: 1,
        icon: "stress",
        label: "Stress or anxiety",
        color: "#303030",
      },
      {
        id: 2,
        icon: "socializing",
        label: "Socializing",
        color: "#303030",
      },
      {
        id: 3,
        icon: "relaxation",
        label: "Relaxation",
        color: "#303030",
      },
      {
        id: 4,
        icon: "emotional",
        label: "Emotional escape",
        color: "#303030",
      },
      { id: 5, icon: "habit", label: "Habit", color: "#303030" },
      {
        id: 6,
        icon: "confidence",
        label: "Confidence boost",
        color: "#303030",
      },
    ],
  },
  {
    id: 3,
    question: 'Do you ever drink to feel "normal" or fit in with others?',
    options: [
      { id: 1, icon: "yes", label: "Yes", color: "#289F67" },
      {
        id: 2,
        icon: "notSure",
        label: "I'm not sure",
        color: "#FFC633",
      },
      { id: 3, icon: "no", label: "No", color: "#E35244" },
    ],
  },
  {
    id: 4,
    question:
      "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
    options: [
      { id: 1, icon: "yes", label: "Yes", color: "#289F67" },
      {
        id: 2,
        icon: "notSure",
        label: "I'm not sure",
        color: "#FFC633",
      },
      { id: 3, icon: "no", label: "No", color: "#E35244" },
    ],
  },
  {
    id: 5,
    question:
      "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
    options: [
      { id: 1, icon: "yes", label: "Yes", color: "#289F67" },
      {
        id: 2,
        icon: "notSure",
        label: "I'm not sure",
        color: "#FFC633",
      },
      { id: 3, icon: "no", label: "No", color: "#E35244" },
    ],
  },
  {
    id: 6,
    question:
      "Do you often seek ways to relax or unwind after a long, stressful day?",
    options: [
      { id: 1, icon: "yes", label: "Yes", color: "#289F67" },
      {
        id: 2,
        icon: "notSure",
        label: "I'm not sure",
        color: "#FFC633",
      },
      { id: 3, icon: "no", label: "No", color: "#E35244" },
    ],
  },
];
