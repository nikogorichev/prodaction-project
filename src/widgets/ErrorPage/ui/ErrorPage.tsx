import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./ErrorPage.module.scss";
import { Button } from "@/shared/ui/Button/Button";

export const ErrorPage = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(styles.errorPage)}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
