import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(900);
  
  useEffect(() => {
    const timer = setInterval(() => 
      setCountdown(prev => prev <= 1 ? 900 : prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(countdown / 60);
  const secs = countdown % 60;
  
  return (
    <span className="font-bold text-2xl leading-7 text-[#6A61F1]">
      {`${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}
    </span>
  );
};

export default Countdown;