"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import male from "../public/male.webp";
import female from "../public/female.webp";

export default function Home() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();

  const getButtonStyles = (gender: string) => ({
    border:
      selectedGender === gender ? "border-purple-700" : "border-[#5349db]",
    bg: selectedGender === gender ? "bg-purple-700" : "bg-[#5349db]",
  });

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-center">
        <Image src={logo} alt="logo" className="w-30" />
      </nav>

      <div className="flex flex-col pt-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          What is your gender?
        </h1>
        <span className="text-gray-600 text-lg text-center">
          We will use this to personalize your plan
        </span>
      </div>

      <main className="flex-1 pb-8 max-w-sm mx-auto flex items-center justify-center">
        <div className="flex gap-4">
          <button
            onClick={() => handleGenderSelect("male")}
            className={`border-3 rounded-2xl overflow-hidden cursor-pointer flex flex-col ${
              getButtonStyles("male").border
            }`}
          >
            <Image src={male} alt="male" className="h-48 w-full object-cover" />
            <div
              className={`flex-1 flex items-center justify-center ${
                getButtonStyles("male").bg
              }`}
            >
              <h3 className="font-bold text-white p-2">Male</h3>
            </div>
          </button>
          <button
            onClick={() => handleGenderSelect("female")}
            className={`border-3 rounded-2xl overflow-hidden cursor-pointer flex flex-col ${
              getButtonStyles("female").border
            }`}
          >
            <Image
              src={female}
              alt="female"
              className="h-48 w-full object-cover"
            />
            <div
              className={`flex-1 flex items-center justify-center ${
                getButtonStyles("female").bg
              }`}
            >
              <h3 className="font-bold text-white p-2">Female</h3>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
