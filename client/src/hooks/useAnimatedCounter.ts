import { useState, useEffect } from "react";

export const useAnimatedCounter = (min: number, max: number, interval: number = 3000) => {
  const [value, setValue] = useState(min);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => {
        const change = (Math.random() - 0.5) * 0.2;
        const newValue = prev + change;
        return Math.max(min, Math.min(max, newValue));
      });
    }, interval);

    return () => clearInterval(timer);
  }, [min, max, interval]);

  return value;
};
