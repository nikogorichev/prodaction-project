import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { memo, ReactNode, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = memo(
  ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const mods: Mods = {
      [styles.opened]: isOpen,
      [styles.isClosing]: isClosing,
    };

    const handleOnClose = () => {
      if (onClose) {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, ANIMATION_DELAY);
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
          handleOnClose();
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

    const additionalStyles = [className, "app_modal"];

    if (lazy && !isMounted) {
      return null;
    }

    return (
      <Portal>
        <div className={classNames(styles.modal, mods, additionalStyles)}>
          <Overlay onClick={handleOnClose} />
          <div className={styles.content}>{children}</div>
        </div>
      </Portal>
    );
  }
);

Modal.displayName = "Modal";
