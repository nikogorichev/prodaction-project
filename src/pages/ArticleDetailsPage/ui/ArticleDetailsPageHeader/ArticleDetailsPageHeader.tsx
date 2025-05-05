import { useSelector } from "react-redux";
import styles from "./ArticleDetailsPageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { getCanEditArticle } from "../../model/selectors/article";
import { getArticleDetailsData } from "@/entities/Article";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";

export const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate();
  const canEditArticle = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData)

  const onBackToList = () => {
    navigate(getRouteArticles());
  };

  const onEditPage = () => {
    navigate(getRouteArticleEdit(article?.id ?? ""));
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
