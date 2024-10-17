import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import styles from "./ArticleDetails.module.scss";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/view-20-20.svg";
import CalendarIcon from "shared/assets/icons/date-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

type Props = {
  id: string;
};

export const ArticleDetails = (props: Props) => {
  const { id } = props;
  const dispath = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => dispath(fetchArticleById(id)));

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        title="Произошла ошибка при загрузке статьи"
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img || ""}
            className={styles.avatar}
          />
        </div>

        <Text
          title={article?.title}
          text={article?.subtitle}
          className={styles.title}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} className={styles.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent className={styles.block} block={block} />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent className={styles.block} block={block} />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent className={styles.block} block={block} />
      );
    default:
      return null;
  }
};
