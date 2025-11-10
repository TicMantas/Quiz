"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useSearchParams } from "next/navigation";
import femaleIcon from "../../public/female-transformation.png";
import maleIcon from "../../public/male-transformation.png";
import Countdown from "@/components/Countdown";
import SummaryCard from "@/components/SummaryCard";
import Brain from "../../public/brain.png";
import Target from "../../public/target.png";
import Text from "@/components/Text";

const CheckoutPage = () => {
  const params = useSearchParams();
  const gender = params.get("gender");

  return (
    <div>
      <header className="bg-[#FFC633] w-full">
        <nav className=" flex justify-between items-center p-5">
            <Image src={logo} alt="logo" className="w-16 h-9" />
          <div className="flex flex-row gap-2.5 items-center flex-1 justify-end">
            <p className="font-bold text-lg leading-5.5">Reserved price for:</p>
            <div className="w-16">
              <Countdown />
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex flex-col px-5 pt-10 pb-6 gap-10">
        <section className="flex flex-col gap-6">
          <Text>Your personalized Alcohol-Free Plan is ready!</Text>
          <div className="flex gap-5">
            <div className="flex items-center w-full gap-2 border-r border-[#767AF9]">
              <Image src={Brain} alt="Brain" className="w-8 h-8" />
              <div>
                <p className=" text-[10px] leading-2.5">Drinking patterns</p>
                <p className="text-[12px] font-bold leading-3.5">Imbalanced</p>
              </div>
            </div>
            <div className="flex items-center w-full gap-2">
              <Image src={Target} alt="Target" className="w-8 h-8" />
              <div>
                <p className="font-normal text-[10px] leading-2.5 ">Goal</p>
                <p className="text-[12px] font-bold leading-3.5">
                  Regain control and live alcohol-free
                </p>
              </div>
            </div>
          </div>

          <div>
            {gender === "Male" ? (
              <Image src={maleIcon} alt="Male" />
            ) : (
              <Image src={femaleIcon} alt="Female" />
            )}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <Text>Your Personal Summary</Text>

          <div className="flex flex-col gap-2">
            <SummaryCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckoutPage;
