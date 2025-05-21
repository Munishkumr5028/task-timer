import { useRef, useEffect, useState } from "react";

export default function useTaskTimer(onTick) {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    clear();
    setTime(0);
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        const updated = prev + 1;
        onTick?.(updated);
        return updated;
      });
    }, 1000);
  };

  const pause = () => clear();

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => () => clear(), []);

  return { time, start, pause, clear };
}
