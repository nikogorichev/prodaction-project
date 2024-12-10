import { useRef } from "react";

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const throttleRef = useRef(false);
  return (...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  };
};
