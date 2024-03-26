import { useTranslation } from "react-i18next";
import styles from "./notFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

const NotFoundPage = () => {
  const { t } = useTranslation("notfound");

  return (
    <div className={classNames(styles.notFoundPage)}>
      {t("Страница не найдена")}
    </div>
  );
};

export default NotFoundPage;
