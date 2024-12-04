import { classNames } from "shared/lib/classNames/classNames";
import styles from "./navbar.module.scss";
import { useState } from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

type NavbarProps = { className?: string };

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  const onShowModal = () => {
    setIsAuthModal(true);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
        <Button
          className={styles.links}
          theme={ThemeButton.CLEAR_INVERTED}
          onClick={onLogout}
        >
          Выйти
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        Войти
      </Button>
      {isAuthModal ? (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      ) : (
        ""
      )}
    </header>
  );
};
