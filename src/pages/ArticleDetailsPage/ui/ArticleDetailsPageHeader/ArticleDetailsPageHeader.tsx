import { useSelector } from "react-redux";
import styles from "./ArticleDetailsPageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { getUserAuthData } from "entities/User";
import { getCanEditArticle } from "../../model/selectors/article";

export const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate();
  const canEditArticle = useSelector(getCanEditArticle);

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  return (
    <div className={styles.wrapper}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        Назад к списку
      </Button>
      {canEditArticle && (
        <Button theme={ThemeButton.OUTLINE}>Редактировать</Button>
      )}
    </div>
  );
};
