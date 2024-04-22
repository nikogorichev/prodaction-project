import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

type NavbarProps = { className?: string };

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onShowModal = () => {
    setIsAuthModal(true);
  };

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <AppLink
        to={"/"}
        className={styles.mainLink}
        theme={AppLinkTheme.SECONDARY}
      >
        Главная
      </AppLink>

      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
      <Button
        className={styles.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        Войти
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
