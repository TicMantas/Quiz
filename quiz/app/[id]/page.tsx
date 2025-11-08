"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { quiz } from "@/services/quiz";
import arrowLeft from "../../public/arrow-left.png";
import logo from "../../public/logo.png";
import { useState } from "react";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import AnswerButton from "@/components/AnswerButton";

const QuizPage = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(
    undefined
  );
  const id = parseInt(params.id);
  const quizData = quiz.find((q) => q.id === id);
  const handleAnswer = () => {
    if (id < quiz.length) {
      router.push(`/${id + 1}?gender=${gender}`);
    } else {
      router.push(`/result?gender=${gender}`);
    }
  };

  const handleGoBack = () => {
    if (id > 1) {
      router.push(`/${id - 1}?gender=${gender}`);
    } else {
      router.push(`/`);
    }
  };
  return (
    <div className="flex flex-col gap-7 h-screen px-5 pb-5 bg-[#F9F6F4]">
      <header className="flex flex-col gap-3">
        <nav className="flex justify-between pt-6">
          <div>
            <button onClick={() => handleGoBack()}>
              <Image
                src={arrowLeft}
                alt="arrow-left"
                color="black"
                width={24}
              />
            </button>
          </div>
          <div>
            <Image
              src={logo}
              alt="logo"
              color="black"
              className="w-[60px] h-9 object-cover"
            />
          </div>
          <div>
            <span className="font-bold">{id}</span>
            <span>/{quiz.length}</span>
          </div>
        </nav>
        <ProgressBar total={quiz.length} current={id} />
      </header>
      <main className="flex flex-col gap-6 justify-between flex-1">
        <p className="text-2xl font-semibold leading-7 text-center">
          {quizData?.question}
        </p>
        <section className="flex flex-col gap-2">
          {quizData?.options.map((option, index) => {
            return (
              <AnswerButton
                color={option.color}
                key={option.id}
                id={option.id}
                label={option.label}
                icon={option.icon}
                selectedAnswer={selectedAnswer}
                index={index}
                quizId={id}
                onClick={() => {
                  handleAnswer();
                  setSelectedAnswer(option.id);
                }}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default QuizPage;
