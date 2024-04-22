import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = memo(
  ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
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
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleOnClose();
        }
      };
      if (isOpen) {
        window.addEventListener("keydown", onKeyDown);
      }
      return () => {
        clearTimeout(timerRef.current);
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [isOpen]);

    const onContentClick = (event: React.MouseEvent) => {
      event.stopPropagation();
    };

    return (
      <Portal>
        <div className={classNames(styles.modal, mods, [className])}>
          <div className={styles.overlay} onClick={handleOnClose}>
            <div className={styles.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
);

Modal.displayName = "Modal";
