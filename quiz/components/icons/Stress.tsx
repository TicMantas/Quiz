type Props = {
  color: string;
  size: number;
};

export const Stress = ({ size, color }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_713)">
        <path
          d="M15.7443 15.1938C15.7443 15.1938 17.9255 15.1938 18.2414 15.1938C21.137 15.1938 23.4844 12.8469 23.4844 9.95193C23.4844 7.05693 21.137 4.71009 18.2414 4.71009C17.6359 4.71009 17.0545 4.81307 16.5134 5.00184C15.7714 2.41162 13.3852 0.515808 10.5561 0.515808C7.79077 0.515808 5.44889 2.32701 4.65169 4.82751C2.28773 5.33559 0.515625 7.43667 0.515625 9.95193C0.515625 12.8469 2.86298 15.1938 5.75859 15.1938C6.22748 15.1938 5.68331 15.1938 6.83212 15.1938"
          stroke={color}
          strokeWidth="0.8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0916 4.72064C16.8548 4.72064 16.0052 5.15845 15.1143 5.88905"
          stroke={color}
          strokeWidth="0.8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.62051 8.91742H14.4093L12.0266 13.6262H16.9007L9.6289 23.4842L11.5501 16.751H6.14032L9.62051 8.91742Z"
          stroke={color}
          strokeWidth="0.8"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_713">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
