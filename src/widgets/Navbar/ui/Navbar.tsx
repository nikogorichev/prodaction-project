import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

type NavbarProps = { className?: string };

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = () => {
    setIsAuthModal((prev) => !prev);
  };

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        Войти
        {/* <AppLink
          to={"/"}
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Главная
        </AppLink>
        
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink> */}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        12uih u1i3 qhui13 hr4u23ih ui32h 4u2i3 rhiu24r5 ubg24i u2ih rui23
        hgr2iuvgiu2 gviu 24gv
      </Modal>
    </div>
  );
};
