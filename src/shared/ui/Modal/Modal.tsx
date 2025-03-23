import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { memo, ReactNode } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "shared/lib/hooks/useModal/useModal";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
  lazy?: boolean;
}


export const Modal = memo((props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isClosing, isMounted, close } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const additionalStyles = [className, "app_modal"];

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, additionalStyles)}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
});

Modal.displayName = "Modal";
