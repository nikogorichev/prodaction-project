import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
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
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={classNames(styles.modal, mods, [className])}>
      <div className={styles.overlay} onClick={handleOnClose}>
        <div className={styles.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
