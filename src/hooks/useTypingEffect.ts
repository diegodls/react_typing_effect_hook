import { useEffect, useRef, useState } from "react";
export function useTypingEffect(text: string, timeInMsToChangeLetters: number) {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const currentPositionRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => prev + 1);
      currentPositionRef.current += 1;
      console.log(`${text.length} - ${currentPosition}`);

      // using ref instead of currentPosition state makes not necessary to update the dependency list of useEffect, otherwise using state and updating the dependency list will make infinite loop as currentPosition is updated making useEffect change causing currentPosition update, making useEffect change causing currentPosition update, make useEffect change...... you got it!

      if (currentPositionRef.current > text.length) {
        clearInterval(interval);
      }
    }, timeInMsToChangeLetters);

    return () => {
      clearInterval(interval);
      setCurrentPosition(0);
      currentPositionRef.current = 0;
    };
  }, [timeInMsToChangeLetters, text]);

  return text.substring(0, currentPosition);
}
