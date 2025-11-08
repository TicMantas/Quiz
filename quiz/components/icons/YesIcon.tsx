type Props = {
  color: string;
  size: number;
};

const YesIcon = ({ color, size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.883911 8.4L6.48391 14L16.8839 2"
        stroke={color}
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default YesIcon;
