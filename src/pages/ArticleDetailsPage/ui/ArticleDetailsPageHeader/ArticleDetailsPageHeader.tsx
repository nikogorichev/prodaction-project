import { useSelector } from "react-redux";
import styles from "./ArticleDetailsPageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { getCanEditArticle } from "../../model/selectors/article";
import { getArticleDetailsData } from "entities/Article";

export const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate();
  const canEditArticle = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData)

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  const onEditPage = () => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  };

  return (
    <div className={styles.wrapper}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        Назад к списку
      </Button>
      {canEditArticle && (
        <Button theme={ThemeButton.OUTLINE} onClick={onEditPage}>
          Редактировать
        </Button>
      )}
    </div>
  );
};
