import { useTranslation } from "react-i18next";
import styles from "./notFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

const NotFoundPage = () => {
  const { t } = useTranslation("notfound");

  return (
    <Page className={classNames(styles.notFoundPage)}>
      {t("Страница не найдена")}
    </Page>
  );
};

export default NotFoundPage;
