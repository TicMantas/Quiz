import Image, { StaticImageData } from "next/image";

type Props = {
  genderPicture: StaticImageData;
  genderSelect: () => void;
  gender: string;
};

const GenderCard = ({ genderPicture, genderSelect, gender }: Props) => {
  return (
    <button
      onClick={genderSelect}
      className={`border-2 border-[#5349DB] rounded-lg cursor-pointer flex flex-col`}
    >
      <Image src={genderPicture} alt={gender} className=" w-full rounded-lg" />
      <div
        className={`flex-1 flex items-center justify-center bg-[#5349DB] p-5`}
      >
        <p className="font-semibold text-white text-lg leading-5.5">{gender}</p>
      </div>
    </button>
  );
};

export default GenderCard;
