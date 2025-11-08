type Props = {
  color: string;
  size: number;
};

const Health = ({ color, size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4186 13.3441C24.9505 5.4945 16.6166 0.278042 11.9999 4.8947C7.38335 0.278042 -0.950594 5.4945 3.58139 13.3441C5.66715 16.9567 9.8738 20.2689 11.9999 20.8386C14.1261 20.2689 18.3328 16.9567 20.4186 13.3441Z"
        stroke={color}
        strokeMiterlimit="22.926"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2048 11.9996H15.5198L13.7599 16.1385L10.2401 7.86079L8.48022 11.9996H0.795288"
        stroke={color}
        strokeMiterlimit="22.926"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Health;
