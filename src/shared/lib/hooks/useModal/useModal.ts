import { useEffect, useRef, useState } from "react";

interface UseModalProps {
  onClose?: () => void;
  animationDelay?: number;
  isOpen?: boolean;
}

export const useModal = (props: UseModalProps) => {
  const { onClose, animationDelay = 300, isOpen } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
