import { useEffect, useRef } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const ThreeJSSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const roasValue = useAnimatedCounter(3.5, 5.0, 3000);

  return (
    <div className="flex justify-center">
      <div ref={sphereRef} className="sphere relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">ROAS</div>
            <div className="text-3xl font-black text-accent-foreground">
              {roasValue.toFixed(1)}x
            </div>
            <div className="text-sm mt-2">평균 성과</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeJSSphere;
