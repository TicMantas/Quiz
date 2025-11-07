"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import male from "../public/male.png";
import female from "../public/female.png";
import GenderCard from "@/components/GenderCard";

const Home = () => {
  const router = useRouter();

  const handleGenderSelect = (gender: string) => {
    router.push(`/1?gender=${gender}`);
  };

  const genderCardTypes = [
    { id: 1, gender: "Male", image: male },
    { id: 2, gender: "Female", image: female },
  ];

  return (
    <div className="min-h-screen flex flex-col px-5 pb-5 gap-8">
      <header className="flex justify-center pt-6">
        <Image src={logo} alt="logo" className="w-15.5 h-9" />
      </header>

      <main className="flex-1 flex">
        <section className="flex flex-col flex-1">
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-2xl leading-7 font-semibold text-center">
              What is your gender?
            </p>
            <p className="text-gray-600 leading-4.5 text-sm text-center">
              We will use this to personalize your plan
            </p>
          </div>
          <div className="flex flex-5 items-center justify-center gap-4">
            {genderCardTypes.map((card) => (
              <GenderCard
                key={card.id}
                gender={card.gender}
                genderSelect={() => handleGenderSelect(card.gender)}
                genderPicture={card.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
